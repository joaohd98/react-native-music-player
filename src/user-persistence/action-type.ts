import {Action} from "redux";
import {AuthorizeResult} from "react-native-app-auth";

export enum UserActionConst {
  saveUser = "UserActionConst/saveUser",
}

interface SaveUser extends Action<UserActionConst.saveUser> {
  type: UserActionConst.saveUser,
  authorize: AuthorizeResult
}

export type UserActionType = SaveUser
