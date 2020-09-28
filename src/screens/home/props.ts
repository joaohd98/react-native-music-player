import {NewReleasesResponse} from "../../repositories/new-releases/response";
import {RepositoryStatus} from "../../repositories/repository-status";

export interface HomeScreenPropsActions {
  getNewReleases: () => void;
}

export interface HomeScreenProps extends HomeScreenPropsActions {
  newReleases: NewReleasesResponse[]
  statusNewReleases: RepositoryStatus.
}
