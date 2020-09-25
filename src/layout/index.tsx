import React from 'react';
import {StatusBar} from 'react-native';
import {LayoutStyles} from './styles';
import {NavigationContainer} from "@react-navigation/native";
import { TabsNavigation} from "../routes/tab-navigation";
import {Provider} from "react-redux";
import {STORE} from "../redux/store";
import {LoginScreenRedux} from "../screens/login";
import {enableScreens} from "react-native-screens";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {Routes} from "../routes/routes";

enableScreens();

const Stack = createNativeStackNavigator<Routes>();

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
                <Stack.Screen name="LoginScreen" component={LoginScreenRedux} />
                <Stack.Screen name="TabsBottom" component={TabsNavigation} />
              </Stack.Navigator>
            </NavigationContainer>
          </Container>
        </Provider>
      </>
    );
  }
}
