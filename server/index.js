const dotenv = require('dotenv');
const neo4j = require('neo4j-driver');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql/graphql-schema');
const { makeAugmentedSchema } = require('neo4j-graphql-js');
const express = require('express');
const cors = require('cors');
const path = require('path');

dotenv.config();

const port = Number(process.env.PORT) || 8080;

const schema = makeAugmentedSchema({
  typeDefs,
  resolvers,
});

const driver = neo4j.driver(
  process.env.NEO4J_URL || 'bolt://localhost:7687',
  neo4j.auth.basic(
    process.env.NEO4J_USER || 'neo4j',
    process.env.NEO4J_PASSWORD || 'neo4j'
  )
);

const server = new ApolloServer({
  context: req => ({
    driver,
    ...req,
    cypherParams: {
      uid: req.user ? req.user.id : 2,
    },
  }),
  introspection: true,
  playground: true,
  schema: schema,
});

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

server.applyMiddleware({ app });

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Graphql running at http://localhost:${port}/graphql`);
});
