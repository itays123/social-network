const fs = require('fs');
const path = require('path');

const typeDefs = fs
  .readFileSync(path.join(__dirname, 'schema.graphql'))
  .toString('utf-8');

module.exports = {
  typeDefs,
};
