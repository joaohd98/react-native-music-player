import {Action} from "redux";
import {AuthorizeResult} from "react-native-app-auth";

export enum UserActionConst {
  saveUser = "UserActionConst/saveUser",
  refreshTokens = "UserActionConst/refreshTokens"
}

interface SaveUser extends Action<UserActionConst.saveUser> {
  type: UserActionConst.saveUser,
  authorize: AuthorizeResult
}

interface RefreshTokens extends Action<UserActionConst.refreshTokens> {
  type: UserActionConst.refreshTokens,
  token: string
  refreshToken: string
}


export type UserActionType = SaveUser | RefreshTokens
