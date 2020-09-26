import React from 'react';
import {StatusBar} from 'react-native';
import {LayoutStyles} from './styles';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {STORE} from "../redux/store";
import {enableScreens} from "react-native-screens";
import {StackNavigation} from "../routes/stack-navigation";

enableScreens();

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
              <StackNavigation />
            </NavigationContainer>
          </Container>
        </Provider>
      </>
    );
  }
}


