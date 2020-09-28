import {NewReleasesResponse, NewReleasesResponseUriType} from "./response";
import axios from "axios"
import {repositoriesUri} from "../repository-url";

export class NewReleasesRepository {
  static getNewsReleases() {
    return axios.get<NewReleasesResponseUriType>(repositoriesUri.newReleases)
  }
}
