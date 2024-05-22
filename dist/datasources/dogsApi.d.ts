import { RESTDataSource } from "@apollo/datasource-rest";
import { Dog } from "../types";
export declare class DogsApi extends RESTDataSource {
    baseURL: string;
    getDogsByName(name: string): Promise<Dog[]>;
}
//# sourceMappingURL=dogsApi.d.ts.map