import {RepositoryStatus} from "../../repositories/repository-status";
import {ReleasesResponse} from "../../repositories/releases/response";

export interface HomeScreenPropsActions {
  getReleases: () => void;
}

export interface HomeScreenProps extends HomeScreenPropsActions {
  newReleases: ReleasesResponse[]
  statusReleases: RepositoryStatus
}
