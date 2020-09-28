import React from 'react';
import {StatusBar} from 'react-native';
import {LayoutStyles} from './styles';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {PERSISTER_STORE, STORE} from "../redux/store";
import {enableScreens} from "react-native-screens";
import {StackNavigation} from "../routes/stack-navigation";
import { PersistGate } from 'redux-persist/integration/react'
import {setupAxios} from "../utils/axios-setup";

enableScreens();

export class Layout extends React.Component {
  componentDidMount() {
    setupAxios()
  }

  render() {
    const {SafeAreaViewTop, Container} = LayoutStyles;

    return (
      <>
        <Provider store={STORE}>
          <PersistGate loading={null} persistor={PERSISTER_STORE}>
            <StatusBar barStyle="light-content" />
            <SafeAreaViewTop />
            <Container>
              <NavigationContainer>
                <StackNavigation />
              </NavigationContainer>
            </Container>
          </PersistGate>
        </Provider>
      </>
    );
  }
}


