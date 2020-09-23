import React, {Ref} from 'react';
import {CustomHeaderProps} from './props';
import {CustomHeaderState} from './state';
import {HeaderStyles} from './styles';
import {CustomColors} from '../../theme/colors';
import {TextInput} from "react-native";

export class CustomHeader extends React.Component<CustomHeaderProps, CustomHeaderState> {
  inputRef: {focus: () => void} | null = null;

  state: CustomHeaderState = {
    isCollapsed: true,
  };

  changeCollapsed = (isToCollapse: Boolean) => {
    this.setState({isCollapsed: isToCollapse}, () => {
      this.inputRef?.focus()
    });
  };

  getCollapsedHeader() {
    const {SearchIcon, SearchIconTouchableOpacity, TitleText} = HeaderStyles;

    return (
      <>
        <TitleText>{this.props.title}</TitleText>
        <SearchIconTouchableOpacity onPress={() => this.changeCollapsed(false)}>
          <SearchIcon widthIcon={24} heightIcon={24} />
        </SearchIconTouchableOpacity>
      </>
    );
  }

  getSearchbarHeader() {
    const {
      TextInput,
      IconInput,
      IconContainer,
      CloseIconInput,
      CloseIconInputTouchableOpacity,
    } = HeaderStyles;

    return (
      <>
        <IconContainer>
          <IconInput widthIcon={24} heightIcon={24} />
        </IconContainer>
        <TextInput
          ref={ref => this.inputRef = ref}
          placeholderTextColor={CustomColors.graySmooth}
          placeholder={this.props.placeholder}
          onFocus={this.props.onFocus}
          onChangeText={this.props.onChangeText}
        />
        <CloseIconInputTouchableOpacity
          onPress={() => this.changeCollapsed(true)}>
          <CloseIconInput widthIcon={24} heightIcon={24} />
        </CloseIconInputTouchableOpacity>
      </>
    );
  }

  render() {
    const {ContainerView} = HeaderStyles;

    return (
      <ContainerView>
        {this.state.isCollapsed
          ? this.getCollapsedHeader()
          : this.getSearchbarHeader()}
      </ContainerView>
    );
  }
}
