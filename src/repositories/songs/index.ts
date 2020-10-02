import axios from "axios";
import {ReleasesResponseUriType} from "../releases/response";
import {repositoriesUri} from "../repository-url";

export class SongsRepository {
  static getRecentsSongs() {
    const data = new URLSearchParams({
      limit: "4"
    })

    return axios.get<ReleasesResponseUriType>(repositoriesUri.recentsSongs + "?" + data)
  }
}
