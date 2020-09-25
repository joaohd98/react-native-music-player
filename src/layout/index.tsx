import React from 'react';
import {StatusBar} from 'react-native';
import {LayoutStyles} from './styles';
import {NavigationContainer} from "@react-navigation/native";
import { TabsNavigation} from "../routes/tab-routes";
import {Provider} from "react-redux";
import {STORE} from "../redux/store";
import {LoginScreenRedux} from "../screens/login";
import {enableScreens} from "react-native-screens";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

enableScreens();
const Stack = createNativeStackNavigator<{
  Login: undefined;
  Tabs: undefined;
}>();

export class Layout extends React.Component {
  render() {
    const {SafeAreaViewTop, Container} = LayoutStyles;

    return (
      <>
        <Provider store={STORE}>
          <StatusBar barStyle="light-content" />
          <SafeAreaViewTop />
          <Container>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreenRedux} />
                <Stack.Screen name="Tabs" component={TabsNavigation} />
              </Stack.Navigator>
            </NavigationContainer>
          </Container>
        </Provider>
      </>
    );
  }
}
