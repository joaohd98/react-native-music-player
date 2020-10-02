import axios from "axios";
import {repositoriesUri} from "../repository-url";
import {RecentsSongResponseUriType} from "./recents-song-response";

export class SongsRepository {
  static getRecentsSongs() {
    const data = new URLSearchParams({
      limit: "4"
    })

    return axios.get<RecentsSongResponseUriType>(repositoriesUri.recentsSongs + "?" + data)
  }
}
