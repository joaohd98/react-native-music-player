import {RepositoryStatus} from "../../../../repositories/repository-status";
import {ReleasesRepository} from "../../../../repositories/releases";

export interface HomeReleasesProps {
  releases: ReleasesRepository[]
  status: RepositoryStatus
}
