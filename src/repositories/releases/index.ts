import {ReleasesResponseUriType} from "./response";
import axios from "axios"
import {repositoriesUri} from "../repository-url";

export class ReleasesRepository {
  static getReleases() {
    return axios.get<ReleasesResponseUriType>(repositoriesUri.releases)
  }
}
