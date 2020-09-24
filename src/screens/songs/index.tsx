import React from 'react';
import {CustomHeader} from '../../components/header';
import {View} from 'react-native';
import {CustomColors} from "../../theme/colors";

export class SongsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: CustomColors.backgroundColor}}>
        <CustomHeader title={'Songs'} placeholder={'Search for songs'} />
      </View>
    );
  }
}
