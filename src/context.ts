import { DogsApi } from "./datasources/dogsApi";

export type DataSourceContext = {
  dataSources: {
    dogsAPI: DogsApi;
  };
};
