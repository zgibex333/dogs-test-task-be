import { RESTDataSource } from "@apollo/datasource-rest";
import { Dog } from "../types";

export class DogsApi extends RESTDataSource {
  baseURL = "https://api.api-ninjas.com/v1/";

  async getDogsByName(name: string): Promise<Dog[]> {
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
