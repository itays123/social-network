const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cypher = async (driver, query, params) => {
  const session = driver.session();
  const q = await session.run(query, params);
  session.close();
  return q.records;
};

const getJWT = userId =>
  jwt.sign({ userId }, process.env.JWT_SECRET || 'secret');

module.exports = {
  async Login(obj, { email, password }, { driver }) {
    console.log('login request made');
    const [user] = await cypher(
      driver,
      'MATCH (u:User { email: $email }) RETURN id(u) AS id, u.password AS password',
      { email }
    );
    if (!user) throw new Error("user with this email doesn't exist");
    const userId = user.get('id').low;
    const encryptedPassword = user.get('password');
    const isPasswordsMatch = bcrypt.compareSync(password, encryptedPassword);
    if (!isPasswordsMatch) throw new Error('wrong password');
    const token = getJWT(userId);
    return token;
  },
  async Signup(obj, { email, password, name, avatarUrl }, { driver }) {
    const [user] = await cypher(
      driver,
      'MATCH (u:User { email: $email }) RETURN id(u) AS id',
      { email }
    );
    if (user) throw new Error('user with this email already exists');

    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await cypher(
      driver,
      'CREATE (u:User { email: $email, password: $password, name: $name, avatarUrl: $avatarUrl }) RETURN id(u) AS id',
      { email, password: encryptedPassword, name, avatarUrl }
    );
    const userId = newUser.get('id').low;
    const token = getJWT(userId);
    return token;
  },
};
