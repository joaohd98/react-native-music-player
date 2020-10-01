import React from "react";
import {HomePlaylistProps} from "./props";
import {HomePlaylistState} from "./state";
import {HomePlaylistStyle} from "./styles";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {CustomColors} from "../../../../theme/colors";

export class HomePlaylistView extends React.Component<HomePlaylistProps, HomePlaylistState> {

  getTryAgain() {
    const {
      TryAgainView,
    } = HomePlaylistStyle

    return <TryAgainView text={"It was not possible to get the playlist"} onPress={this.props.onTryAgain} />
  }

  getLoading() {
    const {
      ActivityIndicator,
    } = HomePlaylistStyle

    return <ActivityIndicator size={"large"} color={CustomColors.orange} />
  }

  getList() {
    const {
      ScrollHorizontal,
      PlaylistCard,
      PlaylistCardImage,
      PlaylistCardNameText
    } = HomePlaylistStyle

    return (
      <ScrollHorizontal horizontal={true}>
        {
          this.props.playlists.map(playlist => (
            <PlaylistCard>
              <PlaylistCardImage uri={playlist.imageUri} />
              <PlaylistCardNameText>{playlist.name}</PlaylistCardNameText>
            </PlaylistCard>
          ))
        }
      </ScrollHorizontal>
    )
  }

  render() {
    const {
      ContainerView,
      TitleText,
      ViewAllTouchable,
      ViewAllText,
    } = HomePlaylistStyle

    const getContent = {
      [RepositoryStatus.FAILED]: this.getTryAgain(),
      [RepositoryStatus.LOADING]: this.getLoading(),
      [RepositoryStatus.SUCCESS]: this.getList(),
      [RepositoryStatus.NONE]: <></>
    }

    return (
      <ContainerView>
        <TitleText>Playlist</TitleText>
        <ViewAllTouchable>
          <ViewAllText>View All</ViewAllText>
          { getContent[this.props.status] }
        </ViewAllTouchable>
      </ContainerView>
    )
  }
}
