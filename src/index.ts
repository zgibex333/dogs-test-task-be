import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { DogsApi } from "./datasources/dogsApi";
import { resolvers } from "./resolvers";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  })
);

async function startApolloServer() {
  const server = new ApolloServer({ resolvers, typeDefs });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          dogsAPI: new DogsApi(),
        },
      };
    },
    listen: {
      port: Number(process.env.PORT) || 4000,
    },
  });

  console.log(`🚀  Server is running! 📭  Query at ${url}`);
}

startApolloServer();
