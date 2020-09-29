import React from 'react';
import {CustomHeader} from '../../components/header';
import {ReducersProps} from "../../redux/reducers";
import {HomeScreenProps, HomeScreenPropsActions} from "./props";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {Container} from "../../components/container";
import {HomeScreenInitialState} from "./redux/reducer";
import {HomeReleasesView} from "./components/releases";
import {HomeScreenStyles} from "./styles";

export class HomeScreen extends React.Component<HomeScreenProps> {
  componentDidMount() {
    this.props.getReleases()
  }

  render() {
    const {
      BorderView
    } = HomeScreenStyles

    return (
      <Container>
        <CustomHeader title={'Home'} placeholder={'Search album song'} />
        <HomeReleasesView status={this.props.statusReleases} releases={this.props.newReleases} onTryAgain={this.props.getReleases} />
        <BorderView />
      </Container>
    );
  }
}

const mapStateToProps = (state: ReducersProps): HomeScreenProps => ({
  ...state.homeScreen!,
});

const mapDispatchToProps = (dispatch: Dispatch): HomeScreenPropsActions => ({
  getReleases: bindActionCreators(HomeScreenInitialState.getReleases, dispatch)
});

export const HomeScreenRedux = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
