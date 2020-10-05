import {RepositoryStatus} from "../../../../repositories/repository-status";
import {RecentsSongResponse} from "../../../../repositories/songs/recents-song-response";

export interface HomeSongsProps {
  songs: RecentsSongResponse[];
  status: RepositoryStatus;
  onTryAgain: () => void;
}
