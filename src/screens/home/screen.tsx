import React from 'react';
import {CustomHeader} from '../../components/header/header';
import {View} from 'react-native';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <CustomHeader title={'Home'} placeholder={'Search album song'} />
      </View>
    );
  }
}
