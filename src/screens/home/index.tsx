import React from 'react';
import {CustomHeader} from '../../components/header';
import {ReducersProps} from "../../redux/reducers";
import {HomeScreenProps, HomeScreenPropsActions} from "./props";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {Container} from "../../components/container";
import {HomeRecommendedView} from "./components/recommended";
import {RepositoryStatus} from "../../repositories/repository-status";
import {HomeScreenInitialState} from "./redux/reducer";

export class HomeScreen extends React.Component<HomeScreenProps> {
  componentDidMount() {
    this.props.getNewReleases()
  }

  render() {
    return (
      <Container>
        <CustomHeader title={'Home'} placeholder={'Search album song'} />
        <HomeRecommendedView status={this.props.statusNewReleases} />
      </Container>
    );
  }
}

const mapStateToProps = (state: ReducersProps): HomeScreenProps => ({
  ...state.homeScreen!,
});

const mapDispatchToProps = (dispatch: Dispatch): HomeScreenPropsActions => ({
  getNewReleases: bindActionCreators(HomeScreenInitialState.getNewReleases, dispatch)
});

export const HomeScreenRedux = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
