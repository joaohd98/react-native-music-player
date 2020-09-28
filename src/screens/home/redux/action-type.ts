import {Action} from "redux";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {ReleasesResponse} from "../../../repositories/releases/response";

export enum HomeScreenActionConst {
  getReleases = "HomeScreenActionConst/getReleases",
  setReleases = "HomeScreenActionConst/setReleases"
}

interface GetNewReleases extends Action<HomeScreenActionConst.getReleases> {
  type: HomeScreenActionConst.getReleases,
  status: RepositoryStatus
}

interface SetNewReleases extends Action<HomeScreenActionConst.setReleases> {
  type: HomeScreenActionConst.setReleases,
  status: RepositoryStatus,
  releases: ReleasesResponse[],
}

export type HomeScreenActionType = GetNewReleases | SetNewReleases
