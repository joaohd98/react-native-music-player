import {RepositoryStatus} from "../../../../repositories/repository-status";
import {FeaturedPlaylistResponse} from "../../../../repositories/playlist/response";

export interface HomePlaylistProps {
  playlists: FeaturedPlaylistResponse[],
  status: RepositoryStatus,
  onTryAgain: () => void
}
