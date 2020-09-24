import React from 'react';
import {CustomHeader} from '../../components/header';
import {View} from 'react-native';
import {CustomColors} from "../../theme/colors";
import {PropsReducers} from "../../redux/reducers";
import {HomeScreenProps} from "./props";
import {Dispatch} from "redux";
import {connect} from "react-redux";

export class HomeScreen extends React.Component<HomeScreenProps> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: CustomColors.backgroundColor}}>
        <CustomHeader title={'Home'} placeholder={'Search album song'} />
      </View>
    );
  }
}

const mapStateToProps = (state: PropsReducers): HomeScreenProps => ({
  ...state.HomeScreen,
});

const mapDispatchToProps = (dispatch: Dispatch): HomeScreenProps => ({
  // getAllCard: bindActionCreators(ShowCardScreenInitial.getAllCard, dispatch),
});

export const HomeScreenRedux = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
