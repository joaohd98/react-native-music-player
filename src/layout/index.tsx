import React from 'react';
import {StatusBar} from 'react-native';
import {LayoutStyles} from './styles';
import {HomeScreen} from '../screens/home';
import {SongsScreen} from "../screens/songs";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabRoutesList} from "../routes/tabRoutes";

const Tab = createBottomTabNavigator<TabRoutesList>();

export class Layout extends React.Component {
  render() {
    const {SafeAreaViewTop, Container, getTabIcon, getBottomTabBarOptions} = LayoutStyles;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaViewTop />
        <Container>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => getTabIcon(route.name, focused)
              })}
              tabBarOptions={getBottomTabBarOptions()}
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
