import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {mount, ReactWrapper} from "enzyme";
import {TryAgainProps} from "./props";
import {TryAgainView} from "./index";
import {TryAgainStyle} from "./styles";

const {
  ContainerView,
  FirstLineText,
  SecondsLineText,
  TouchableButton,
  TouchableText
} = TryAgainStyle

describe('TryAgain', () => {
  let tryAgain: ReactWrapper<TryAgainProps, {}>;

  beforeEach(() => {
    tryAgain = mount(<TryAgainView text={""} onPress={() => {}} />)
  })

  it('renders correctly', () => {
    renderer.create(<TryAgainView text={""} onPress={() => {}} />);
  });

  it('should render text', () => {
    const text = "abc123"
    tryAgain.setProps({
      text
    })

    const secondsLineText = tryAgain.find(SecondsLineText)

    expect(secondsLineText.text()).toBe(text)
  });

  it('should call "onPress"', () => {
    const onPress = jest.fn()

    tryAgain.setProps({
      onPress
    })

    tryAgain.find(TouchableButton).simulate("click")

    expect(onPress).toHaveBeenCalled()
  });
})
