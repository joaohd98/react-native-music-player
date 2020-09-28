import styled from "styled-components/native";
import {CustomFonts} from "../../../../theme/fonts";
import {CustomColors} from "../../../../theme/colors";

export const HomeReleasesStyles = {
  ContainerView: styled.View`
    margin-horizontal: 22px
  `,
  ReleaseText: styled.Text`
    font-size: 20px;
    font-family: ${CustomFonts.circularStdMedium};
    color: ${CustomColors.white};
    letter-spacing: 0.2px;
  `,
  ScrollHorizontal: styled.ScrollView`
     flex: 1;
  `,
  CardView: styled.View`
      background-color: red;
  `,
  CoverImage: styled.Image`

  `,
  ReleaseNameText: styled.Text`

  `,
  ArtistNameText: styled.Text`

  `,
}
