import React from 'react';
import {StatusBar} from 'react-native';
import {LayoutStyles} from './styles';
import {HomeScreen, HomeScreenRedux} from '../screens/home';
import {SongsScreen} from "../screens/songs";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabRoutesList} from "../routes/tabRoutes";
import {Provider} from "react-redux";
import {STORE} from "../redux/store";

const Tab = createBottomTabNavigator<TabRoutesList>();

export class Layout extends React.Component {
  render() {
    const {SafeAreaViewTop, Container, getTabIcon, getBottomTabBarOptions} = LayoutStyles;

    return (
      <>
        <Provider store={STORE}>
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
                <Tab.Screen name="Home" component={HomeScreenRedux} />
                <Tab.Screen name="Songs" component={SongsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </Container>
        </Provider>
      </>
    );
  }
}
