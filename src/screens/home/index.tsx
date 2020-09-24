import React from 'react';
import {CustomHeader} from '../../components/header';
import {View} from 'react-native';
import {CustomColors} from "../../theme/colors";

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: CustomColors.backgroundColor}}>
        <CustomHeader title={'Home'} placeholder={'Search album song'} />
      </View>
    );
  }
}
