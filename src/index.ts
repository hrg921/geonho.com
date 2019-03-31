import { ApolloServer } from 'apollo-server';
import * as path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

async function bootstrap() {
    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      resolvers: [__dirname + "/schema/**/*.resolver.ts"],
      // automatically create `schema.gql` file with schema definition in current folder
      emitSchemaFile: path.resolve(__dirname, "./schema/schema.gql"),
    });
  
    // Create GraphQL server
    const server = new ApolloServer({
      schema,
      // enable GraphQL Playground
      playground: true,
    });
  
    // Start the server
    const { url } = await server.listen(process.env.PORT || 4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
