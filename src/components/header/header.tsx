import React from 'react';
import {CustomHeaderProps} from './props';
import {CustomHeaderState} from './state';
import {HeaderStyles} from './styles';
import {View} from 'react-native';

export class CustomHeader extends React.Component<
  CustomHeaderProps,
  CustomHeaderState
> {
  state: CustomHeaderState = {
    isCollapsed: true,
  };

  changeCollapsed = (isToCollapse: Boolean) => {
    this.setState({isCollapsed: isToCollapse});
  };

  getCollapsedHeader() {
    const {SearchIcon, SearchIconTouchableOpacity, TitleText} = HeaderStyles;

    return (
      <>
        <TitleText>{this.props.title}</TitleText>
        <SearchIconTouchableOpacity onPress={() => this.changeCollapsed(false)}>
          <SearchIcon />
        </SearchIconTouchableOpacity>
      </>
    );
  }

  getSearchbarHeader() {
    const {
      TextInput,
      IconInput,
      CloseIconInput,
      CloseIconInputTouchableOpacity,
    } = HeaderStyles;

    return (
      <>
        <IconInput />
        <TextInput
          onFocus={this.props.onFocus}
          onChangeText={this.props.onChangeText}
        />
        <CloseIconInputTouchableOpacity
          onPress={() => this.changeCollapsed(true)}>
          <CloseIconInput />
        </CloseIconInputTouchableOpacity>
      </>
    );
  }

  render() {
    return (
      <View>
        {this.state.isCollapsed
          ? this.getCollapsedHeader()
          : this.getSearchbarHeader()}
      </View>
    );
  }
}
