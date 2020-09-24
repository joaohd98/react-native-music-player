import {HomeScreenProps} from "../props";
import {HomeScreenActionConst, HomeScreenActionType} from "./action-type";

type Response = HomeScreenActionType;

export class HomeScreenAction {
  static todo = (): Response => ({
    type: HomeScreenActionConst.todo,
  });
}
