import {UserActionConst, UserActionType} from "./action-type";
import {AuthorizeResult} from "react-native-app-auth";

type Response = UserActionType;

export class UserAction {
  static saveUser = (authorize: AuthorizeResult): Response => ({
    type: UserActionConst.saveUser,
    authorize: authorize
  });
}
