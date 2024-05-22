"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const graphql_tag_1 = require("graphql-tag");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const dogsApi_1 = require("./datasources/dogsApi");
const resolvers_1 = require("./resolvers");
const typeDefs = (0, graphql_tag_1.gql)((0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
}));
async function startApolloServer() {
    const server = new server_1.ApolloServer({ resolvers: resolvers_1.resolvers, typeDefs });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => {
            return {
                dataSources: {
                    dogsAPI: new dogsApi_1.DogsApi(),
                },
            };
        },
    });
    console.log(`🚀  Server is running! 📭  Query at ${url}`);
}
startApolloServer();
//# sourceMappingURL=index.js.map