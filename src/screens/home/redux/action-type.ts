import {Action} from "redux";
import {NewReleasesResponse} from "../../../repositories/new-releases/response";

export enum HomeScreenActionConst {
  getNewReleases = "HomeScreenActionConst/getNewReleases"
}

interface GetNewReleases extends Action<HomeScreenActionConst.getNewReleases> {
  type: HomeScreenActionConst.getNewReleases,
  releases: NewReleasesResponse[]
}

export type HomeScreenActionType = GetNewReleases
