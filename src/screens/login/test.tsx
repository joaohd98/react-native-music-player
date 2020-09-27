import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {LoginScreen} from "./index";
import {mount, ReactWrapper} from "enzyme";
import {LoginScreenState} from "./state";
import {LoginButtonView} from "./components/button";
import {LoginScreenProps} from "./props";
import {RepositoryStatus} from "../../repositories/repository-status";
import {UserInitialState} from "../../user-persistence/reducer";
import {AuthenticationRepository} from "../../repositories/authentication";
import {AuthorizeResult} from "react-native-app-auth";

describe("LoginScreen", () => {
  let login: ReactWrapper<LoginScreenProps, LoginScreenState>;
  let repository: AuthenticationRepository;

  beforeEach(() => {
    login = mount(<LoginScreen {...UserInitialState} />);
    repository = (login.instance() as LoginScreen).repository
  });

  it('renders correctly', () => {
    renderer.create(<LoginScreen {...UserInitialState} />);
  });

  it('click callback', () => {
    repository.makeLogin = () => {}

    const button = login.find(LoginButtonView)
    button.simulate("click")

    expect(login.state("status")).toBe(RepositoryStatus.LOADING)
  });

  it('click onSuccess', () => {
    repository.makeLogin = (onSuccess) => {
      const mock: AuthorizeResult = {
        accessToken: "",
        accessTokenExpirationDate: "",
        authorizationCode: "",
        idToken: "",
        refreshToken: "",
        scopes: [],
        tokenType: ""
      }

      onSuccess(mock)
    }

    const spy = jest.fn()
    login.setProps({saveUser: spy})
    login.update()

    const button = login.find(LoginButtonView)
    button.simulate("click")

    expect(spy).toHaveBeenCalled()
  });

  it('click onFailed', () => {
    repository.makeLogin = (onSuccess, onFailed) => {
      onFailed()
    }

    const button = login.find(LoginButtonView)
    button.simulate("click")

    expect(login.state("status")).toBe(RepositoryStatus.FAILED)
  });

  it('onLogged change page', () => {
    const spy = jest.fn()

    const navigation = login.prop("navigation")

    login.setProps({
      navigation: {
        ...navigation!,
        navigate: spy
      },
      isLogged: true
    })

    expect(spy).toHaveBeenCalled()
  });
})

