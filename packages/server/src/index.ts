import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { JobResolvers } from './resolvers/JobResolvers';

export const schema = await buildSchema({
  resolvers: [JobResolvers]
});

async function main() {
  const app = express();
  const server = new ApolloServer({ schema });

  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/api');
  });
}

main();
