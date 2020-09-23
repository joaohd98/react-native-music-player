import React from 'react';
import {StatusBar} from 'react-native';
import {LayoutStyles} from './styles';
import {HomeScreen} from '../screens/home/screen';

export class Layout extends React.Component {
  render() {
    const {SafeAreaView} = LayoutStyles;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </>
    );
  }
}
