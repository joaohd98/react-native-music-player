import {HomeScreenActionConst, HomeScreenActionType} from "./action-type";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {NewReleasesResponse} from "../../../repositories/new-releases/response";

type Response = HomeScreenActionType;

export class HomeScreenAction {
  static getNewReleases = (): Response => ({
    type: HomeScreenActionConst.getNewReleases,
    status: RepositoryStatus.LOADING
  });

  static setNewReleases = (status: RepositoryStatus, releases: NewReleasesResponse[]): Response => ({
    type: HomeScreenActionConst.setNewReleases,
    status,
    releases
  });

}
