import {ReleasesResponseUriType} from "./response";
import axios from "axios"
import {repositoriesUri} from "../repository-url";

export class ReleasesRepository {
  static getReleases() {
    const data = new URLSearchParams({
      limit: "6"
    })

    return axios.get<ReleasesResponseUriType>(repositoriesUri.releases + "?" + data)
  }
}
