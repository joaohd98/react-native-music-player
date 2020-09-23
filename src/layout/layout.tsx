import React from 'react';
import {StatusBar, Text} from 'react-native';
import {CustomFonts} from '../theme/fonts';
import {LayoutStyles} from "./styles";

export class Layout extends React.Component {

  render() {
    let {
      SafeAreaView
    } = LayoutStyles

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={{fontFamily: CustomFonts.circularStdBook}}>AAA</Text>
          <Text style={{fontFamily: CustomFonts.circularStdBold}}>AAA</Text>
          <Text style={{fontFamily: CustomFonts.circularStdMedium}}>AAA</Text>
          <Text>AAA</Text>
        </SafeAreaView>
      </>
    );
  }
}
