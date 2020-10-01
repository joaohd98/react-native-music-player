import {Reducer} from "react";
import {HomeScreenActionConst, HomeScreenActionType} from "./action-type";
import {HomeScreenProps} from "../props";
import {HomeScreenAction} from "./action";
import {RepositoryStatus} from "../../../repositories/repository-status";

export const HomeScreenInitialState: HomeScreenProps = {
  newReleases: [],
  playlists: [],
  statusReleases: RepositoryStatus.LOADING,
  statusPlaylists: RepositoryStatus.LOADING,
  getReleases: () => HomeScreenAction.getReleases(),
  getFeaturedPlaylists: () => HomeScreenAction.getFeaturedPlaylists()
};

export const HomeScreenReducer: Reducer<HomeScreenProps | undefined, HomeScreenActionType> = (
  state = HomeScreenInitialState,
  action
): HomeScreenProps => {
  switch (action.type) {
    case HomeScreenActionConst.getReleases: {
      return {
        ...state,
        statusReleases: action.status
      }
    }

    case HomeScreenActionConst.setReleases: {
      return {
        ...state,
        statusReleases: action.status,
        newReleases: action.releases
      }
    }

    case HomeScreenActionConst.getFeaturedPlaylists: {
      return {
        ...state,
        statusPlaylists: action.status,
      }
    }

    case HomeScreenActionConst.setFeaturedPlaylists: {
      return {
        ...state,
        statusPlaylists: action.status,
        playlists: action.playlists
      }
    }

    default: return state;
  }
};
