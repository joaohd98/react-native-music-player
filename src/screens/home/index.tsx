import React from 'react';
import {CustomHeader} from '../../components/header';
import {PropsReducers} from "../../redux/reducers";
import {HomeScreenProps} from "./props";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Container} from "../../components/container";
import {HomeRecommendedView} from "./components/recommended";

export class HomeScreen extends React.Component<HomeScreenProps> {
  render() {
    return (
      <Container>
        <CustomHeader title={'Home'} placeholder={'Search album song'} />
        <HomeRecommendedView />
      </Container>
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
