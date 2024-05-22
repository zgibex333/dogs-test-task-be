"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        dogs: (_, { name }, { dataSources }) => dataSources.dogsAPI.getDogsByName(name),
    },
};
//# sourceMappingURL=resolvers.js.map