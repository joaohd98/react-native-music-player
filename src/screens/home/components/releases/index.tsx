import React from "react";
import {HomeReleasesProps} from "./props";
import {HomeReleasesState} from "./state";

export class HomeReleasesView extends React.Component<HomeReleasesProps, HomeReleasesState> {

  getList() {
    const {
      CardView,
      CoverImage,
      ReleaseNameText,
      ArtistNameText
    } = HomeReleasesStyles

    return this.props.releases.map(release => (
      <CardView>
        <CoverImage source={{uri: release.imageUri}} />
        <ReleaseNameText>{release.name}</ReleaseNameText>
        <ArtistNameText>{release.artistName}</ArtistNameText>
      </CardView>
    ));
  }

  render() {
    const {
      ContainerView,
      ReleaseText,
      ScrollHorizontal,
    } = HomeReleasesStyles

    return (
      <ContainerView>
        <ReleaseText>Hot Releases</ReleaseText>
        <ScrollHorizontal>
          { this.getList() }
        </ScrollHorizontal>
      </ContainerView>
    )
  }


}
