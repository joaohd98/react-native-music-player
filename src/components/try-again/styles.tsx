import styled from 'styled-components/native';
import {CustomColors} from "../../theme/colors";
import {CustomFonts} from "../../theme/fonts";

export const TryAgainStyle  = {
  ContainerView: styled.View`
    flex: 1;
    padding: 20px;
    align-items: center;
    justify-content: center;
  `,
  FirstLineText: styled.Text`
    font-size: 16px;
    font-family: ${CustomFonts.circularStdBold};
    color: ${CustomColors.white};
    text-align: center;
  `,
  SecondLineText: styled.Text`
    font-size: 14px;
    font-family: ${CustomFonts.circularStdMedium};
    color: ${CustomColors.white};
    text-align: center;
  `,
  TouchableButton: styled.TouchableOpacity`
     margin-top: 25px;
     background-color: ${CustomColors.spotifyColor};
     width: 120px;
     padding: 10px 5px;
     border-radius: 20px;
  `,
  TouchableText: styled.Text`
    color: white;
    text-align: center;
    font-family: ${CustomFonts.circularStdBold};
  `
}
