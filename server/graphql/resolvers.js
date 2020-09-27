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
    console.log(userId, encryptedPassword, password);
    return '';
  },
};
