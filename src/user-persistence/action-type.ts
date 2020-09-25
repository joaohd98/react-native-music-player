import {Action} from "redux";

export enum UserActionConst {
  makeLogin = "UserActionConst/makeLogin",
  second = "UserActionConst/second",
}

interface MakeLogin extends Action<UserActionConst.makeLogin> {}

interface Second extends Action<UserActionConst.second> {}

export type UserActionType =
  MakeLogin | Second
