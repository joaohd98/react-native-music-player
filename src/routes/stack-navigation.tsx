import {createNativeStackNavigator, NativeStackNavigationOptions} from "react-native-screens/native-stack";
import {LoginScreenRedux} from "../screens/login";
import {TabsNavigation} from "./tab-navigation";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {UserProps} from "../user-persistence/props";
import {useSelector} from "react-redux";
import {PropsReducers} from "../redux/reducers";
import {CustomColors} from "../theme/colors";

export type Routes = {
  LoginScreen: undefined,
  TabsBottom: undefined,
  HomeScreen: undefined,
  SongsScreen: undefined
}

const Stack = createNativeStackNavigator<Routes>();

export const StackNavigation = () => {
  const isLogged = useSelector<PropsReducers>(props => props.UserProps.isLogged)
  const initialRouteName = isLogged ? "TabsBottom" : "LoginScreen"

  const options: NativeStackNavigationOptions = {
    headerShown: false,
    contentStyle: {
      backgroundColor: CustomColors.backgroundColor
    }
  }

  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={options}>
      <Stack.Screen name="LoginScreen" component={LoginScreenRedux} />
      <Stack.Screen name="TabsBottom" component={TabsNavigation} />
    </Stack.Navigator>
  )
}
