import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';
import { connect } from 'mongoose';
import * as path from 'path';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ObjectIdScalar } from './object-id.scalar';
import { TypegooseMiddleware } from './typegoose-middleware';

async function bootstrap() {
    dotenv.config();

    const APOLLO_ENGINE_API_KEY = process.env.APOLLO_ENGINE_API_KEY;
    const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
    const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
    const MONGO_DB_CLUSTER = process.env.MONGO_DB_CLUSTER;
    const MONGO_DB_DB = process.env.MONGO_DB_DB;

    await connect(
        `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER}.mongodb.net/${MONGO_DB_DB}?retryWrites=true`,
        { useNewUrlParser: true }
    );

    // build TypeGraphQL executable schema
    const schema = await buildSchema({
        resolvers: [__dirname + '/schema/**/*.resolver.ts'],
        // automatically create `schema.gql` file with schema definition in current folder
        emitSchemaFile: path.resolve(__dirname, './schema/schema.gql'),
        globalMiddlewares: [TypegooseMiddleware],
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    });

    const server = new ApolloServer({
        schema,
        playground: true,
        engine: {
            apiKey: APOLLO_ENGINE_API_KEY,
        },
    });

    const { url } = await server.listen(process.env.PORT || 4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
