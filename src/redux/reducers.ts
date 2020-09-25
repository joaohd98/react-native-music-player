import AsyncStorage from '@react-native-community/async-storage';
import {HomeScreenProps} from "../screens/home/props";
import {combineReducers} from "redux";
import {HomeScreenReducer} from "../screens/home/redux/reducer";
import {persistReducer} from 'redux-persist'
import {UserReducer} from "../user-persistence/reducer";
import {UserProps} from "../user-persistence/props";
import {UserActionType} from "../user-persistence/action-type";
import {PersistConfig} from "redux-persist/es/types";

export interface PropsReducers {
  userProps: UserProps;
  HomeScreen: HomeScreenProps;
}

const persistConfig: PersistConfig<UserProps | undefined> = {
  storage: AsyncStorage,
  key: "userProps",
}

const userPersistedReducer = persistReducer<UserProps | undefined, UserActionType>(persistConfig, UserReducer)

export const Reducers = combineReducers({
  userProps: userPersistedReducer,
  HomeScreen: HomeScreenReducer,
});

