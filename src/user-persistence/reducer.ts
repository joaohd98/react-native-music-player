import {Reducer} from "react";
import {UserActionConst, UserActionType} from "./action-type";
import {UserProps} from "./props";
import {UserAction} from "./action";

export const UserInitialState: UserProps = {
  isLogged: false,
  token: "",
  refreshToken: "",
  saveUser: UserAction.saveUser
};

export const UserReducer: Reducer<UserProps | undefined, UserActionType> = (
  state= UserInitialState,
  action
): UserProps => {
  switch (action.type) {
    case UserActionConst.saveUser: {
      return {
        ...state,
        isLogged: true,
        token: action.authorize.accessToken,
        refreshToken: action.authorize.refreshToken
      }
    }

    case UserActionConst.refreshTokens: {
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken
      }
    }

    default: return state ;
  }
};
