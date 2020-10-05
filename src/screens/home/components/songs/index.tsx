import React from "react";
import {HomeSongsStyles} from "./styles";
import {HomeSongsProps} from "./props";
import {TryAgainView} from "../../../../components/try-again";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {CustomColors} from "../../../../theme/colors";
import {View} from "react-native";

export class HomeSongsView extends React.Component<HomeSongsProps> {
  getTryAgain() {
    return <TryAgainView text={"It was not possible to get songs"} onPress={this.props.onTryAgain} />
  }

  getLoading() {
    const {ActivityIndicator} = HomeSongsStyles

    return <ActivityIndicator size={"large"} color={CustomColors.orange} />
  }

  getList() {
    const {
      RowSongContainerView,
      RowSongView,
      RowSongArtistNameText,
      RowSongDurationText,
      RowSongNameText,
      RowSongPlayIcon,
      RowSongsTextView,
      RowBottomLine
    } = HomeSongsStyles

    return (
      <RowSongContainerView>
        {
          this.props.songs.map((song, index) => (
            <View key={index.toString()}>
              <RowSongView>
                <RowSongPlayIcon heightIcon={28} widthIcon={28} />
                <RowSongsTextView>
                  <RowSongNameText>
                    {song.name}
                  </RowSongNameText>
                  <RowSongArtistNameText>
                    {song.artistName}
                  </RowSongArtistNameText>
                </RowSongsTextView>
                <RowSongDurationText>
                  {song.duration}
                </RowSongDurationText>
              </RowSongView>
              <RowBottomLine />
            </View>
          ))
        }
      </RowSongContainerView>
    )
  }

  render() {
    const {
      ContainerView,
      TopView,
      TitleText,
      ViewAllTouchable,
      ViewAllText,
    } = HomeSongsStyles

    const getContent = {
      [RepositoryStatus.LOADING]: this.getLoading(),
      [RepositoryStatus.FAILED]: this.getTryAgain(),
      [RepositoryStatus.SUCCESS]: this.getList(),
      [RepositoryStatus.NONE]: <></>
    }

    return (
      <ContainerView>
        <TopView>
          <TitleText>
            Recently Played
          </TitleText>
          <ViewAllTouchable>
            <ViewAllText>
               View All
            </ViewAllText>
          </ViewAllTouchable>
        </TopView>
        { getContent[this.props.status] }
      </ContainerView>
    )
  }
}
