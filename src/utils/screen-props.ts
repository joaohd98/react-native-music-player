import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";
import {Routes} from "../routes/routes";

type Types = "LoginScreen" | "TabsBottom" | "HomeScreen" | "SongsScreen";

export interface ScreenProps <RouteName extends Types> {
  navigation?: StackNavigationProp<Routes, RouteName>;
  route?: RouteProp<Routes, RouteName>;
}
