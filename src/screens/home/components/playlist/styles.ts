import styled from "styled-components/native";
import {UriImage} from "../../../../components/uri-image";
import {TryAgainView} from "../../../../components/try-again";
import {PercentageScreen} from "../../../../utils/percentage-screen";
import {CustomColors} from "../../../../theme/colors";
import {CustomFonts} from "../../../../theme/fonts";

export const HomePlaylistStyle = {
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
  ViewAllTouchable: styled.TouchableOpacity`

  `,
  ViewAllText: styled.Text`
    color: ${CustomColors.orangeSmooth};
    font-family: ${CustomFonts.circularStdBook};
    font-size: 16px;
  `,
  ScrollHorizontal: styled.ScrollView`
    padding-horizontal: 22px
  `,
  PlaylistCard: styled.View`
    margin-right: 30px;
    width: ${PercentageScreen.getWidth(30)};
  `,
  PlaylistCardImage: styled(UriImage)`
    height: 110px;
    width: 100%;
    border-radius: 8px;
    border-color: rgba(255, 255, 255, .1);
    border-width: 3px;
  `,
  PlaylistCardNameText: styled.Text`
    font-size: 16px;
    font-family: ${CustomFonts.circularStdBold};
    color: ${CustomColors.white};
    opacity: 0.6;
    margin-top: 5px;
  `,
  ActivityIndicator: styled.ActivityIndicator`
    flex: 1;
    padding: 20px;
    justify-content: center;
  `,
}
