import {Action} from "redux";
import {NewReleasesResponse} from "../../../repositories/new-releases/response";
import {RepositoryStatus} from "../../../repositories/repository-status";

export enum HomeScreenActionConst {
  getNewReleases = "HomeScreenActionConst/getNewReleases",
  setNewReleases = "HomeScreenActionConst/setNewReleases"
}

interface GetNewReleases extends Action<HomeScreenActionConst.getNewReleases> {
  type: HomeScreenActionConst.getNewReleases,
  status: RepositoryStatus
}

interface SetNewReleases extends Action<HomeScreenActionConst.setNewReleases> {
  type: HomeScreenActionConst.setNewReleases,
  status: RepositoryStatus,
  releases: NewReleasesResponse[],
}

export type HomeScreenActionType = GetNewReleases | SetNewReleases
