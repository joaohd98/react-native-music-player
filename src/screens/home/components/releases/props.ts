import {RepositoryStatus} from "../../../../repositories/repository-status";
import {ReleasesResponse} from "../../../../repositories/releases/response";

export interface HomeReleasesProps {
  releases: ReleasesResponse[]
  status: RepositoryStatus
  onTryAgain: () => void
}
