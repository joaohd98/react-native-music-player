import React from "react";
import {LoginScreenStyles} from "./styles";
import {AuthenticationHandler} from "../../repositories/authentication";
import {Alert} from "react-native";
import {LoginScreenState} from "./state";
import {RepositoryStatus} from "../../repositories/repository-status";
import {CustomColors} from "../../theme/colors";
import {LoginButtonView} from "./components/button";

export class LoginScreen extends React.Component<{}, LoginScreenState> {
  state: LoginScreenState = {
    status: RepositoryStatus.NONE
  }

  onPressLogin = () => {
    this.setState({status: RepositoryStatus.LOADING}, () => {
      AuthenticationHandler.makeLogin((res) => {
        Alert.alert("Sucesso");
      }, () => {
        this.setState({status: RepositoryStatus.FAILED})
      })
    })
  }


  render() {
    const {
      Container,
      ImageLogo,
      TouchableOpacity,
    } = LoginScreenStyles

    return (
      <Container>
        <ImageLogo heightIcon={200}  widthIcon={200} />
        <LoginButtonView onPress={this.onPressLogin} disabled={this.state.status == RepositoryStatus.LOADING} />
      </Container>
    )
  }
}
