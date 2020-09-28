import {Reducer} from "react";
import {HomeScreenActionConst, HomeScreenActionType} from "./action-type";
import {HomeScreenProps} from "../props";
import {HomeScreenAction} from "./action";
import {RepositoryStatus} from "../../../repositories/repository-status";

export const HomeScreenInitialState: HomeScreenProps = {
  newReleases: [],
  statusNewReleases: RepositoryStatus.LOADING,
  getNewReleases: () => HomeScreenAction.getNewReleases()
};

export const HomeScreenReducer: Reducer<HomeScreenProps | undefined, HomeScreenActionType> = (
  state = HomeScreenInitialState,
  action
): HomeScreenProps => {
  switch (action.type) {
    case HomeScreenActionConst.getNewReleases: {
      return {
        ...state,
        newReleases: action.releases
      }
    }

    default: return state;
  }
};
