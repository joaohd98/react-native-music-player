import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {CustomHeader} from '../component';
import {HeaderStyles} from '../styles';
import {mount, ReactWrapper} from 'enzyme';
import {CustomHeaderProps} from '../props';
import {CustomHeaderState} from '../state';

const {
  SearchIcon,
  TitleText,
  TextInput,
  IconInput,
  CloseIconInput,
  SearchIconTouchableOpacity,
  CloseIconInputTouchableOpacity,
} = HeaderStyles;

describe('Header', () => {
  let header: ReactWrapper<CustomHeaderProps, CustomHeaderState>;

  beforeEach(() => {
    header = mount(<CustomHeader />);
  });

  it('renders correctly', () => {
    renderer.create(<CustomHeader />);
  });

  it('has no search bar', () => {
    let title = 'abc';
    header.setProps({title: title});
    header.update();

    const titleText = header.find(TitleText);
    const searchIcon = header.find(SearchIcon);

    expect(titleText.text()).toBe(title);
    expect(searchIcon).toHaveLength(1);
  });

  it('has search bar', () => {
    header.setState({isCollapsed: false});
    header.update();

    const textInput = header.find(TextInput);
    const iconInput = header.find(IconInput);
    const iconCloseInput = header.find(CloseIconInput);

    expect(textInput).toHaveLength(1);
    expect(iconInput).toHaveLength(1);
    expect(iconCloseInput).toHaveLength(1);
  });

  it('change collapsed on click', () => {
    const hasInput = (isExpectingZero: Boolean) => {
      const textInput = header.find(TextInput);
      expect(textInput).toHaveLength(isExpectingZero ? 0 : 1);
    };

    hasInput(true);

    const touchableSearch = header.find(SearchIconTouchableOpacity);
    touchableSearch.simulate('click');
    hasInput(false);

    const touchableClose = header.find(CloseIconInputTouchableOpacity);
    touchableClose.simulate('click');
    hasInput(true);
  });

  it('open keyboard on show search bar', () => {
    const instance = header.instance() as CustomHeader

    instance.inputRef = {focus: () => jest.fn()}
    header.find(SearchIconTouchableOpacity).simulate('click');

    expect(instance.inputRef.focus).toHaveBeenCalled()
  });

  it('call focus search bar', () => {
    const spy = jest.fn();

    header.setState({isCollapsed: false});
    header.setProps({onFocus: spy});
    header.update();

    header.find(TextInput).prop('onFocus')();
    expect(spy).toHaveBeenCalled();
  });

  it('call change text search bar', () => {
    const spy = jest.fn();

    header.setState({isCollapsed: false});
    header.setProps({onChangeText: spy});
    header.update();

    header.find(TextInput).prop('onChangeText')();
    expect(spy).toHaveBeenCalled();
  });
});
