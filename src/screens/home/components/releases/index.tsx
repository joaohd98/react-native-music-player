import React from "react";
import {HomeReleasesProps} from "./props";
import {HomeReleasesState} from "./state";
import {HomeReleasesStyles} from "./styles";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {CustomColors} from "../../../../theme/colors";
import {TryAgainView} from "../../../../components/try-again";

export class HomeReleasesView extends React.Component<HomeReleasesProps, HomeReleasesState> {
  getFailed() {
    return (
      <TryAgainView
        text={"It was not possible to get the releases"}
        onPress={this.props.onTryAgain}
      />
    )
  }

  getLoading() {
    const {
      ActivityIndicator,
    } = HomeReleasesStyles

    return (
      <ActivityIndicator size={"large"} color={CustomColors.orange} />
    )
  }

  getList() {
    const {
      CardView,
      CoverImage,
      ReleaseNameText,
      ArtistNameText,
      ScrollHorizontal
    } = HomeReleasesStyles

    return (
      <ScrollHorizontal horizontal={true} showsHorizontalScrollIndicator={false} >
        {
          this.props.releases.map(release => (
            <CardView key={release.name}>
              <CoverImage source={{uri: release.imageUri}} />
              <ReleaseNameText numberOfLines={1}>{release.name}</ReleaseNameText>
              <ArtistNameText numberOfLines={1}>{release.artistName}</ArtistNameText>
            </CardView>
          ))
        }
      </ScrollHorizontal>
    )

  }

  render() {
    const {
      ContainerView,
      ReleaseText
    } = HomeReleasesStyles

    const getContent = {
      [RepositoryStatus.NONE]: <></>,
      [RepositoryStatus.FAILED]: this.getFailed(),
      [RepositoryStatus.LOADING]: this.getLoading(),
      [RepositoryStatus.SUCCESS]: this.getList()
    }

    return (
      <ContainerView>
        <ReleaseText>Hot Releases</ReleaseText>
        { getContent[this.props.status] }
      </ContainerView>
    )
  }
}
