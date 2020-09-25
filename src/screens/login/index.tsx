import React from "react";
import {LoginScreenStyles} from "./styles";
import {AuthenticationHandler} from "../../repositories/authentication";
import {Alert} from "react-native";
import {LoginScreenState} from "./state";
import {RepositoryStatus} from "../../repositories/repository-status";

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

  getInnerContent(): Element {
    const {TouchableImage, ActivityIndicator} = LoginScreenStyles

    if(this.state.status == RepositoryStatus.LOADING) {
      return <ActivityIndicator size="large" color="#0000ff" />
    }
    else {
      return <TouchableImage heightIcon={50}  widthIcon={160} />
    }
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
        <TouchableOpacity onPress={this.onPressLogin} disabled={this.state.status == RepositoryStatus.LOADING}>
          { this.getInnerContent() }
        </TouchableOpacity>
      </Container>
    )
  }
}
