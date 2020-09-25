import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {mount, ReactWrapper} from "enzyme";
import {LoginButtonStyles} from "../button/styles";
import {LoginButtonProps} from "../button/props";
import {LoginButtonView} from "../button";
import {LoginScreen} from "../../index";

const {
  TouchableOpacity,
  TouchableImage,
  ActivityIndicator
} = LoginButtonStyles

describe("LoginButtonView", () => {
  let loginButton: ReactWrapper<LoginButtonProps>;

  beforeEach(() => {
    const loginScreen = mount(<LoginScreen onLogin={() => {}} />)
    const props = loginScreen.find(LoginButtonView).props()

    loginButton = mount(<LoginButtonView {...props}/>)
  });

  it('renders correctly', () => {
    renderer.create(<LoginButtonView disabled={false} onPress={() => {}}/>);
  });

  it('initial rendering', () => {
    let touchable = loginButton.find(TouchableOpacity)
    let touchableImage = loginButton.find(TouchableImage)

    expect(touchable.prop('disabled')).toBe(false)
    expect(touchableImage).toHaveLength(1)
  });

  it('loading status', () => {
    loginButton.setProps({disabled: true})
    loginButton.update()

    let touchable = loginButton.find(TouchableOpacity)
    let activityIndicator = loginButton.find(ActivityIndicator)

    expect(touchable.prop('disabled')).toBe(true)
    expect(activityIndicator).toHaveLength(1)
  });


  it('check click', () => {
    const spy = jest.fn()

    loginButton.setProps({
      onPress: spy
    })

    loginButton.find(TouchableOpacity).simulate("click")

    expect(spy).toHaveBeenCalled()
  });
})

