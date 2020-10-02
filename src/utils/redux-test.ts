import {applyMiddleware, CombinedState, combineReducers, createStore, Store} from "redux";
import {ActionsType, ReducersProps} from "../redux/reducers";
import {UserInitialState, UserReducer} from "../user-persistence/reducer";
import {HomeScreenInitialState, HomeScreenReducer} from "../screens/home/redux/reducer";
import createSagaMiddleware from "redux-saga";
import {UserActionType} from "../user-persistence/action-type";
import {HomeScreenActionType} from "../screens/home/redux/action-type";
import {UserProps} from "../user-persistence/props";
import {Reducer} from "react";
import {HomeScreenProps} from "../screens/home/props";

export const storeFactory = (): Store<CombinedState<ReducersProps>, ActionsType> => {
  const reducers = combineReducers<{
    userProps: Reducer<UserProps | undefined, UserActionType>,
    homeScreen: Reducer<HomeScreenProps | undefined, HomeScreenActionType>
  }>({
    userProps: UserReducer,
    homeScreen: HomeScreenReducer,
  });

  const initialStore: ReducersProps = {
    userProps: UserInitialState,
    homeScreen: HomeScreenInitialState
  };

  const saga = createSagaMiddleware();

  return createStore(reducers, initialStore, applyMiddleware(saga))
}
