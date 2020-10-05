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
import {HomePlaylistView} from "./components/playlist";
import {HomeSongsView} from "./components/songs";

export class HomeScreen extends React.Component<HomeScreenProps> {
  componentDidMount() {
    this.props.getReleases()
    this.props.getFeaturedPlaylists()
    this.props.getRecentsSongs()
  }

  render() {
    const {
      ScrollView,
      BorderView
    } = HomeScreenStyles

    return (
      <ScrollView>
        <CustomHeader title={'Home'} placeholder={'Search album song'} />
        <HomeReleasesView status={this.props.statusReleases} releases={this.props.newReleases} onTryAgain={this.props.getReleases} />
        <BorderView />
        <HomePlaylistView status={this.props.statusPlaylists} playlists={this.props.playlists}  onTryAgain={this.props.getFeaturedPlaylists} />
        <BorderView />
        <HomeSongsView status={this.props.statusSongs} songs={this.props.songs} onTryAgain={this.props.getRecentsSongs} />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: ReducersProps): HomeScreenProps => ({
  ...state.homeScreen!,
});

const mapDispatchToProps = (dispatch: Dispatch): HomeScreenPropsActions => ({
  getReleases: bindActionCreators(HomeScreenInitialState.getReleases, dispatch),
  getFeaturedPlaylists: bindActionCreators(HomeScreenInitialState.getFeaturedPlaylists, dispatch),
  getRecentsSongs: bindActionCreators(HomeScreenInitialState.getRecentsSongs, dispatch)
});

export const HomeScreenRedux = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
