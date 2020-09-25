import React from "react";
import {LoginScreenStyles} from "./styles";
import {AuthenticationHandler} from "../../repositories/authentication";

export class LoginScreen extends React.Component {
  authHandler = new AuthenticationHandler()

  onPressLogin() {
    new AuthenticationHandler().makeLogin().then(() => {

    }).catch(() => {

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
