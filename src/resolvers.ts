import { DogsApi } from "./datasources/dogsApi";
import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    dogs: (_, { name }, { dataSources }) =>
      dataSources.dogsAPI.getDogsByName(name),
  },
};
