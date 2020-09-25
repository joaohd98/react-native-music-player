import styled from "styled-components/native";
import {Container} from "../../components/container";
import {ImageLogo} from "../../../assets/images/image-logo";
import {CustomColors} from "../../theme/colors";
import {ImageSpotify} from "../../../assets/images/image-spotify";
import {ActivityIndicator} from "react-native";

export const LoginScreenStyles = {
  Container: styled(Container)`
    justify-content: center;
    align-items: center;
  `,
  ImageLogo: styled(ImageLogo)`
    margin-bottom: 30px;
  `,
  TouchableOpacity: styled.TouchableOpacity<{disabled: boolean}>`
    width: 80%;
    flex-direction: row;
    background-color: ${CustomColors.white};
    margin-horizontal: 30px;
    padding: 10px 20px;
    border-radius: 40px;
    justify-content: ${({disabled}) => disabled ? "center" : "flex-start"};
  `,
  TouchableImage: styled(ImageSpotify)``,
  ActivityIndicator: styled(ActivityIndicator)`
    width: 50px;
    height: 50px;
    justify-content: center;
  `
}
