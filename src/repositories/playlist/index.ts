import axios from "axios"
import {FeaturedPlaylistResponse} from "./response";
import {repositoriesUri} from "../repository-url";

export class PlaylistRepository {
  static getFeaturedPlaylist() {
    const data = new URLSearchParams({
      limit: "6"
    })

    return axios.get<FeaturedPlaylistResponse>(repositoriesUri.featuredPlaylist + "?" + data)
  }
}
