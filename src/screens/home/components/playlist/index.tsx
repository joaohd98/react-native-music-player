import React from "react";
import {HomePlaylistProps} from "./props";
import {HomePlaylistState} from "./state";
import {HomePlaylistStyle} from "./styles";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {CustomColors} from "../../../../theme/colors";
import {TryAgainView} from "../../../../components/try-again";

export class HomePlaylistView extends React.Component<HomePlaylistProps, HomePlaylistState> {

  getTryAgain() {
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
            <PlaylistCard key={playlist.name}>
              <PlaylistCardImage uri={playlist.imageUri} />
              <PlaylistCardNameText numberOfLines={1}>{playlist.name}</PlaylistCardNameText>
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
      TopView,
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
        <TopView>
          <TitleText>Playlist</TitleText>
          <ViewAllTouchable>
            <ViewAllText>View All</ViewAllText>
          </ViewAllTouchable>
        </TopView>
        { getContent[this.props.status] }
      </ContainerView>
    )
  }
}
