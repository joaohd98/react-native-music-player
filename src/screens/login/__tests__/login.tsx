import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {LoginScreen} from "../index";
import {mount, ReactWrapper} from "enzyme";
import {LoginScreenState} from "../state";
import {LoginScreenStyles} from "../styles";
import {RepositoryStatus} from "../../../repositories/repository-status";

const {
  TouchableOpacity,
  TouchableImage,
  ActivityIndicator
} = LoginScreenStyles

describe("LoginScreen", () => {
  let login: ReactWrapper<{}, LoginScreenState>;

  beforeEach(() => {
    login = mount(<LoginScreen />);
  });

  it('renders correctly', () => {
    renderer.create(<LoginScreen />);
  });

  it('initial rendering', () => {
    let touchable = login.find(TouchableOpacity)
    let touchableImage = login.find(TouchableImage)

    expect(touchable.prop('disabled')).toBe(false)
    expect(touchableImage).toHaveLength(1)
  });

  it('loading status', () => {
    login.setState({status: RepositoryStatus.LOADING})
    login.update()

    let touchable = login.find(TouchableOpacity)
    let activityIndicator = login.find(ActivityIndicator)

    expect(touchable.prop('disabled')).toBe(true)
    expect(activityIndicator).toHaveLength(1)
  });
})

