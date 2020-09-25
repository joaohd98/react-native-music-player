import {UserActionConst, UserActionType} from "./action-type";
import {AuthorizeResult} from "react-native-app-auth";

type Response = UserActionType;

export class UserAction {
  static saveUser = (res: AuthorizeResult): Response => ({
    type: UserActionConst.makeLogin,
  });
}
