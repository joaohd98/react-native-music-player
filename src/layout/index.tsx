import React from 'react';
import {StatusBar} from 'react-native';
import {LayoutStyles} from './styles';
import {HomeScreen} from '../screens/home';
import {SongsScreen} from "../screens/songs";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabRoutesList} from "../routes/tabRoutes";
import {CustomColors} from "../theme/colors";
import {IconProps} from "../../assets/icons/props";

const Tab = createBottomTabNavigator<TabRoutesList>();

const props: IconProps = {
  widthIcon: 48,
  heightIcon: 48
}

export class Layout extends React.Component {
  render() {
    const {SafeAreaViewTop, Container, getTabIcon} = LayoutStyles;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaViewTop />
        <Container>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, size}) => getTabIcon(route.name, focused)
              })}
              tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                style: {
                  backgroundColor: CustomColors.tabBarColor,
                  marginTop: 16,
                  borderTopWidth: 0,
                },
              }}
            >
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Songs" component={SongsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </Container>
      </>
    );
  }
}
