import React from "react";
import {SafeAreaView, StatusBar, Text} from "react-native";
import {CustomFonts} from "../theme/fonts";

export class Layout extends React.Component{

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1, alignItems: "center", alignContent: "center"}}>
          <Text style={{fontFamily: CustomFonts.circularStdBook}}>AAA</Text>
          <Text style={{fontFamily: CustomFonts.circularStdBold}}>AAA</Text>
          <Text style={{fontFamily: CustomFonts.circularStdMedium}}>AAA</Text>
          <Text>AAA</Text>
        </SafeAreaView>
      </>
    )
  }
}
