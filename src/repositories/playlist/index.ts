import axios from "axios"
import {FeaturedPlaylistResponseUriType} from "./response";
import {repositoriesUri} from "../repository-url";

export class PlaylistRepository {
  static getFeaturedPlaylist() {
    const data = new URLSearchParams({
      limit: "6"
    })

    return axios.get<FeaturedPlaylistResponseUriType>(repositoriesUri.featuredPlaylist + "?" + data)
  }
}
