import React from "react";
import {LoginScreenStyles} from "./styles";
import {AuthenticationRepository} from "../../repositories/authentication";
import {Alert} from "react-native";
import {LoginScreenState} from "./state";
import {RepositoryStatus} from "../../repositories/repository-status";
import {LoginButtonView} from "./components/button";
import {LoginScreenProps} from "./props";

export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  repository = new AuthenticationRepository()

  state: LoginScreenState = {
    status: RepositoryStatus.NONE
  }

  onPressLogin = () => {
    this.setState({status: RepositoryStatus.LOADING}, () => {
      this.repository.makeLogin((res) => {
        this.props.onLogin()
      }, () => {
        Alert.alert("Warning", "We need your permission, to access Spotify")
        this.setState({status: RepositoryStatus.FAILED})
      })
    })
  }

  render() {
    const {
      Container,
      ImageLogo,
    } = LoginScreenStyles

    return (
      <Container>
        <ImageLogo heightIcon={200}  widthIcon={200} />
        <LoginButtonView onPress={this.onPressLogin} disabled={this.state.status == RepositoryStatus.LOADING} />
      </Container>
    )
  }
}
