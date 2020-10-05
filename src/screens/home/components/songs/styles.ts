import styled from "styled-components/native";
import {CustomFonts} from "../../../../theme/fonts";
import {CustomColors} from "../../../../theme/colors";
import {IconClose} from "../../../../../assets/images/icon-close";
import {SvgProps} from "../../../../../assets/images/props";
import {IconPlayColorFul} from "../../../../../assets/images/icon-play-colorful";
import {HomeScreenStyles} from "../../styles";

export const HomeSongsStyles = {
  ContainerView: styled.View`
     height: 220px;
     margin-top: 20px;
  `,
  TopView: styled.View`
    flex-direction: row;
    margin-horizontal: 22px;
    margin-bottom: 25px;
    justify-content: space-between;
  `,
  TitleText: styled.Text`
    font-size: 20px;
    font-family: ${CustomFonts.circularStdMedium};
    color: ${CustomColors.white};
    opacity: 0.8;
    letter-spacing: 0.2px;
  `,
  ViewAllTouchable: styled.TouchableOpacity``,
  ViewAllText: styled.Text`
    color: ${CustomColors.orangeSmooth};
    font-family: ${CustomFonts.circularStdBook};
    font-size: 16px;
  `,
  ActivityIndicator: styled.ActivityIndicator`
    flex: 1;
    padding: 20px;
    justify-content: center;
  `,
  RowSongContainerView: styled.View`
    margin-horizontal: 18px
  `,
  RowSongView: styled.View`
    flex-direction: row;
    margin: 20px 5px; 
  `,
  RowSongPlayIcon: styled(IconPlayColorFul)<SvgProps>`
    align-self: center;     
  `,
  RowBottomLine: styled(HomeScreenStyles.BorderView)`
     margin-left: 55px;
     margin-right: 0;
  `,
  RowSongsTextView: styled.View`
    flex: 1;
    flex-direction: column;
    margin-horizontal: 20px;
  `,
  RowSongNameText: styled.Text`
    font-size: 16px;
    font-family: ${CustomFonts.circularStdBold};
    opacity: 0.6;
    color: ${CustomColors.white};
    margin-bottom: 2px;
  `,
  RowSongArtistNameText: styled.Text`
    font-size: 13px;
    font-family: ${CustomFonts.circularStdBook};
    opacity: 0.28;
    color: ${CustomColors.white};
    margin-top: 2px;   
  `,
  RowSongDurationText: styled.Text`
    font-size: 20px;
    font-family: ${CustomFonts.circularStdBook};
    opacity: 0.28;
    color: ${CustomColors.white};
    align-self: center;
  `
}
