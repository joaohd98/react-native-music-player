import React from "react";
import {HomeReleasesProps} from "./props";
import {HomeReleasesState} from "./state";
import {HomeReleasesStyles} from "./styles";

export class HomeReleasesView extends React.Component<HomeReleasesProps, HomeReleasesState> {

  getList() {
    const {
      CardView,
      CoverImage,
      ReleaseNameText,
      ArtistNameText
    } = HomeReleasesStyles

    return this.props.releases.map(release => (
      <CardView key={release.name}>
        <CoverImage source={{uri: release.imageUri}} />
        <ReleaseNameText numberOfLines={1}>{release.name}</ReleaseNameText>
        <ArtistNameText numberOfLines={1}>{release.artistName}</ArtistNameText>
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
        <ScrollHorizontal horizontal={true} >
          { this.getList() }
        </ScrollHorizontal>
      </ContainerView>
    )
  }


}
