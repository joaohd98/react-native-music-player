import {HomeScreenProps} from "../screens/home/props";
import {combineReducers} from "redux";
import {HomeScreenReducer} from "../screens/home/redux/reducer";

export interface PropsReducers {
  HomeScreen: HomeScreenProps;
}

export const Reducers = combineReducers({
  HomeScreen: HomeScreenReducer,
});
