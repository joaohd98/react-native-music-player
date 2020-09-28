import React from "react";
import {LoginScreenStyles} from "./styles";
import {AuthenticationRepository} from "../../repositories/authentication";
import {Alert} from "react-native";
import {LoginScreenState} from "./state";
import {RepositoryStatus} from "../../repositories/repository-status";
import {LoginButtonView} from "./components/button";
import {LoginScreenProps} from "./props";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {ReducersProps} from "../../redux/reducers";
import {UserPropsActions} from "../../user-persistence/props";
import {UserInitialState} from "../../user-persistence/reducer";

export class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  repository = new AuthenticationRepository()

  state: LoginScreenState = {
    status: RepositoryStatus.NONE
  }

  componentDidUpdate(prevProps: Readonly<LoginScreenProps>, prevState: Readonly<LoginScreenState>, snapshot?: any) {
    if(this.props.isLogged) {
      this.props.navigation?.navigate("TabsBottom")
    }
  }

  onPressLogin = () => {
    this.setState({status: RepositoryStatus.LOADING}, () => {
      this.repository.makeLogin((res) => {
        this.props.saveUser(res)
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

const mapStateToProps = (state: ReducersProps): LoginScreenProps => ({
  ...state.userProps!
});

const mapDispatchToProps = (dispatch: Dispatch): UserPropsActions => ({
  saveUser: bindActionCreators(UserInitialState.saveUser, dispatch)
});

export const LoginScreenRedux = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
