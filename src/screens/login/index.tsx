import React from "react";
import {LoginScreenStyles} from "./styles";

export class LoginScreen extends React.Component {
  render() {
    const {
      Container,
      ImageLogo,
      TouchableOpacity,
      TouchableImage,
      TouchableText
    } = LoginScreenStyles

    return (
      <Container>
        <ImageLogo heightIcon={200}  widthIcon={200} />
        <TouchableOpacity>
          <TouchableImage heightIcon={50}  widthIcon={160} />
        </TouchableOpacity>
      </Container>
    )
  }
}
