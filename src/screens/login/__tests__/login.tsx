import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {LoginScreen} from "../index";
import {mount, ReactWrapper} from "enzyme";
import {LoginScreenState} from "../state";
import {LoginButtonView} from "../components/button";
import {LoginScreenProps} from "../props";
import {RepositoryModel, ServiceTestingSituation} from "../../../repositories/repository-model";
import {RepositoryStatus} from "../../../repositories/repository-status";
import {UserInitialState} from "../../../user-persistence/reducer";

describe("LoginScreen", () => {
  let login: ReactWrapper<LoginScreenProps, LoginScreenState>;

  beforeEach(() => {
    login = mount(<LoginScreen {...UserInitialState} />);
  });

  it('renders correctly', () => {
    renderer.create(<LoginScreen {...UserInitialState} />);
  });

  it('click callback', () => {
    RepositoryModel.situation = ServiceTestingSituation.noAction

    const button = login.find(LoginButtonView)
    button.simulate("click")

    expect(login.state("status")).toBe(RepositoryStatus.LOADING)
  });

  it('click onSuccess', () => {
    RepositoryModel.situation = ServiceTestingSituation.onSuccess

    const spy = jest.fn()
    login.setProps({saveUser: spy})
    login.update()

    const button = login.find(LoginButtonView)
    button.simulate("click")

    expect(spy).toHaveBeenCalled()
  });

  it('click onFailed', () => {
    RepositoryModel.situation = ServiceTestingSituation.onFailed

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

