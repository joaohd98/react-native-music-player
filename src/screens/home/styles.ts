import styled from "styled-components/native";
import {CustomColors} from "../../theme/colors";

export const HomeScreenStyles = {
  ScrollView: styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: 180,
    },
  }))`
    flex: 1;
    background-color: ${CustomColors.backgroundColor};
  `,
  BorderView: styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${CustomColors.graySmooth};
    margin-horizontal: 20px;
    opacity: 0.6
  `
}
