import {UserActionConst, UserActionType} from "./action-type";

type Response = UserActionType;

export class UserAction {
  static saveUser = (): Response => ({
    type: UserActionConst.makeLogin,
  });
}
