import {NewReleasesResponse, NewReleasesResponseUriType} from "./response";
import axios from "axios"
import {repositoriesUri} from "../repository-url";

export class NewReleasesRepository {
  getNewsReleases(onSuccess: (res: NewReleasesResponse[]) => void, onFailed: () => void) {
    axios.get<NewReleasesResponseUriType>(repositoriesUri.newReleases)
      .then(value => NewReleasesResponse.uriContent(value.data))
      .catch(onFailed)
  }
}
