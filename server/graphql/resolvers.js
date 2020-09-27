const bcrypt = require('bcrypt');

const cypher = async (driver, query, params) => {
  const session = driver.session();
  const q = await session.run(query, params);
  session.close();
  return q.records;
};

module.exports = {
  async Login(obj, { email, password }, { driver }) {
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
    console.log(userId);
    return '';
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
    const userId = newUser.get('id');
    console.log(userId);
    return '';
  },
};
