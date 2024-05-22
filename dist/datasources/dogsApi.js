"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsApi = void 0;
const datasource_rest_1 = require("@apollo/datasource-rest");
class DogsApi extends datasource_rest_1.RESTDataSource {
    baseURL = "https://api.api-ninjas.com/v1/";
    async getDogsByName(name) {
        console.log(process.env.API_KEY);
        return await this.get("dogs", {
            headers: {
                "X-Api-Key": process.env.API_KEY || "",
            },
            params: {
                name,
            },
        });
    }
}
exports.DogsApi = DogsApi;
//# sourceMappingURL=dogsApi.js.map