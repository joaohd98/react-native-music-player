import styled from "styled-components/native";
import {Container} from "../../components/container";
import {ImageLogo} from "../../../assets/images/image-logo";
import {CustomColors} from "../../theme/colors";
import {ImageSpotify} from "../../../assets/images/image-spotify";

export const LoginScreenStyles = {
  Container: styled(Container)`
    justify-content: center;
    align-items: center;
  `,
  ImageLogo: styled(ImageLogo)`
    margin-bottom: 30px;
  `,
  TouchableOpacity: styled.TouchableOpacity`
    width: 80%;
    flex-direction: row;
    background-color: ${CustomColors.white};
    margin-horizontal: 30px;
    padding: 10px 20px;
    border-radius: 40px;
    align-items: center;
  `,
  TouchableText: styled.Text`
    color: ${CustomColors.white};
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    margin-left: 15px;
  `,
  TouchableImage: styled(ImageSpotify)``
}
