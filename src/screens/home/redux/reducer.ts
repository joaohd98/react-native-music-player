import {Reducer} from "react";
import {HomeScreenActionConst, HomeScreenActionType} from "./action-type";
import {HomeScreenProps} from "../props";
import {HomeScreenAction} from "./action";
import {RepositoryStatus} from "../../../repositories/repository-status";

export const HomeScreenInitialState: HomeScreenProps = {
  newReleases: [],
  playlists: [],
  songs: [],
  statusReleases: RepositoryStatus.LOADING,
  statusPlaylists: RepositoryStatus.LOADING,
  statusSongs: RepositoryStatus.LOADING,
  getReleases: () => HomeScreenAction.getReleases(),
  getFeaturedPlaylists: () => HomeScreenAction.getFeaturedPlaylists(),
  getRecentsSongs: () => HomeScreenAction.getRecentsSongs()
}

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

    case HomeScreenActionConst.getRecentsSong: {
      return {
        ...state,
        statusSongs: action.status,
      }
    }

    case HomeScreenActionConst.setRecentsSong: {
      return {
        ...state,
        statusSongs: action.status,
        songs: action.songs
      }
    }

    default: return state;
  }
};
