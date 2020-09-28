import React from 'react';
import {CustomHeader} from '../../components/header';
import {ReducersProps} from "../../redux/reducers";
import {HomeScreenProps} from "./props";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Container} from "../../components/container";
import {HomeRecommendedView} from "./components/recommended";
import {RepositoryStatus} from "../../repositories/repository-status";

export class HomeScreen extends React.Component<HomeScreenProps> {
  render() {
    return (
      <Container>
        <CustomHeader title={'Home'} placeholder={'Search album song'} />
        <HomeRecommendedView status={RepositoryStatus.LOADING} />
      </Container>
    );
  }
}

const mapStateToProps = (state: ReducersProps): HomeScreenProps => ({
  ...state.homeScreen,
});

const mapDispatchToProps = (dispatch: Dispatch): HomeScreenProps => ({
  // getAllCard: bindActionCreators(ShowCardScreenInitial.getAllCard, dispatch),
});

export const HomeScreenRedux = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
