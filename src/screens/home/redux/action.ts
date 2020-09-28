import {HomeScreenActionConst, HomeScreenActionType} from "./action-type";

type Response = HomeScreenActionType;

export class HomeScreenAction {
  static getNewReleases = (): Response => ({
    type: HomeScreenActionConst.getNewReleases,
    releases: []
  });
}
