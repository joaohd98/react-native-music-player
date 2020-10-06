import {BottomTabBarOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {LoginScreenRedux} from "../screens/login";
import React from "react";
import {HomeScreenRedux} from "../screens/home";
import {SongsScreen} from "../screens/songs";
import {SvgProps} from "../../assets/images/props";
import {IconTabHomeSelected} from "../../assets/images/icon-tab-home-selected";
import {IconTabHome} from "../../assets/images/icon-tab-home";
import {IconTabSongSelected} from "../../assets/images/icon-tab-song-selected";
import {IconTabSong} from "../../assets/images/icon-tab-song";
import {CustomColors} from "../theme/colors";

const getTabIcon = (name: String, focused: boolean) => {
  const props: SvgProps = {
    widthIcon: 48,
    heightIcon: 48
  }
  switch (name) {
    case "Home": {
      return focused ? IconTabHomeSelected(props) : IconTabHome(props)
    }
    case "Songs": {
      return focused ? IconTabSongSelected(props) : IconTabSong(props)
    }
  }
}
const getBottomTabBarOptions = (): BottomTabBarOptions => ({
  keyboardHidesTabBar: true,
  showLabel: false,
  style: {
    backgroundColor: CustomColors.tabBarColor,
    height: 80,
    paddingVertical: 30,
    borderTopWidth: 0,
  },
})

type TabRoutesList = {
  Home: undefined;
  Songs: undefined;
};

const Tab = createBottomTabNavigator<TabRoutesList>();

export const TabsNavigation = () => {
  return (
    <SongsScreen  />
    // <Tab.Navigator
    //   initialRouteName={"Songs"}
    //   screenOptions={({route}) => ({tabBarIcon: ({focused}) => getTabIcon(route.name, focused)})}
    //   tabBarOptions={getBottomTabBarOptions()} >
    //   <Tab.Screen name="Home" component={HomeScreenRedux} />
    //   <Tab.Screen name="Songs" component={SongsScreen} />
    // </Tab.Navigator>
  )
}


