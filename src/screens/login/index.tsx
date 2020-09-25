import React from "react";
import {LoginScreenStyles} from "./styles";
import {AuthenticationHandler} from "../../repositories/authentication";
import {Alert} from "react-native";

export class LoginScreen extends React.Component {

  onPressLogin() {
    AuthenticationHandler.makeLogin((res) => {
      Alert.alert("Sucesso");
    }, () => {
      Alert.alert("Falha");
    })
  }

  render() {
    const {
      Container,
      ImageLogo,
      TouchableOpacity,
      TouchableImage,
    } = LoginScreenStyles

    return (
      <Container>
        <ImageLogo heightIcon={200}  widthIcon={200} />
        <TouchableOpacity onPress={this.onPressLogin}>
          <TouchableImage heightIcon={50}  widthIcon={160} />
        </TouchableOpacity>
      </Container>
    )
  }
}
