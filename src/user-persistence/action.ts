import {UserActionConst, UserActionType} from "./action-type";

type Response = UserActionType;

export class UserAction {
  static makeLogin = (): Response => ({
    type: UserActionConst.makeLogin,
  });
}
