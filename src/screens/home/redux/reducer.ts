import {HomeScreenProps} from "../props";
import {Reducer} from "react";
import {HomeScreenActionType} from "./action-type";

export const HomeScreenInitialState: HomeScreenProps = {};

export const HomeScreenReducer: Reducer<HomeScreenProps, HomeScreenActionType> = (
  state = HomeScreenInitialState,
  action
): HomeScreenProps => {
  switch (action.type) {
    default: return state;
  }
};
