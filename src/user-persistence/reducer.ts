import {Reducer} from "react";
import {UserActionType} from "./action-type";
import {UserProps} from "./props";

export const UserInitialState: UserProps = {};

export const UserReducer: Reducer<UserProps | undefined, UserActionType> = (
  state= UserInitialState,
  action
): UserProps => {
  switch (action.type) {

    default: return state  ;
  }
};
