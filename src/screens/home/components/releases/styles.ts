import styled from "styled-components/native";
import {CustomFonts} from "../../../../theme/fonts";
import {CustomColors} from "../../../../theme/colors";
import {PercentageScreen} from "../../../../utils/percentage-screen";

export const HomeReleasesStyles = {
  ContainerView: styled.View``,
  ActivityIndicator: styled.ActivityIndicator`
    padding: 20px;
    justify-content: center;
  `,
  ReleaseText: styled.Text`
    margin-horizontal: 22px;
    font-size: 20px;
    font-family: ${CustomFonts.circularStdMedium};
    color: ${CustomColors.white};
    opacity: 0.8;
    letter-spacing: 0.2px;
    margin-bottom: 25px;
  `,
  ScrollHorizontal: styled.ScrollView`
    padding-horizontal: 22px
  `,
  CardView: styled.View`
    width: ${PercentageScreen.getWidth(60)};
    margin-right: 30px;
  `,
  CoverImage: styled.Image`
    height: 125px;
    width: 100%;
    border-radius: 20px;
    border-color: rgba(255, 255, 255, .1);
    border-width: 3px;
  `,
  ReleaseNameText: styled.Text`
    font-size: 16px;
    font-family: ${CustomFonts.circularStdBold};
    color: ${CustomColors.white};
    opacity: 0.6;
    margin-top: 25px;
  `,
  ArtistNameText: styled.Text`
    font-size: 13px;
    font-family: ${CustomFonts.circularStdBold};
    color: ${CustomColors.blackSmooth};
    margin-top: 10px;
  `,
}
