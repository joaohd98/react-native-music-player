import React, {Ref} from 'react';
import {CustomHeaderProps} from './props';
import {CustomHeaderState} from './state';
import {HeaderStyles} from './styles';
import {CustomColors} from '../../theme/colors';
import {Animated, Text, TextInput} from "react-native";
import {HeaderAnimation} from "./animation";

export class CustomHeader extends React.Component<CustomHeaderProps, CustomHeaderState> {
  inputRef?: {focus: () => void};

  state: CustomHeaderState = {
    animated: new Animated.Value(1),
    isCollapsed: true,
  };

  changeCollapsed = (isToCollapse: boolean) => {
    HeaderAnimation.timingAnimation(this.state.animated, isToCollapse, this.setState.bind(this), () => {
      this.inputRef?.focus()
    })
  }

  getCollapsedHeader() {
    const {SearchIcon, SearchIconTouchableOpacity, TitleText} = HeaderStyles;

    const textStyle = HeaderAnimation.getOpacityEffect(this.state.animated)
    const iconStyle = HeaderAnimation.getOpacityEffect(this.state.animated)

    return (
      <>
        <TitleText style={textStyle} >{this.props.title}</TitleText>
        <SearchIconTouchableOpacity style={iconStyle}  onPress={() => this.changeCollapsed(false)}>
          <SearchIcon widthIcon={24} heightIcon={24} />
        </SearchIconTouchableOpacity>
      </>
    );
  }

  getSearchbarHeader() {
    const {
      TextInputContainer,
      TextInput,
      IconInput,
      IconContainer,
      CloseIconInput,
      CloseIconInputTouchableOpacity,
    } = HeaderStyles;

    const iconInputStyle = HeaderAnimation.getOpacityHalfEffect(this.state.animated)
    const inputStyle = HeaderAnimation.getScaleYEffect(this.state.animated)
    const closeIconStyle =  HeaderAnimation.getOpacityEffect(this.state.animated)

    return (
      <>
        <IconContainer style={iconInputStyle}>
          <IconInput widthIcon={24} heightIcon={24} />
        </IconContainer>
        <TextInputContainer>
          <TextInput
            ref={(ref: {focus: () => void}) => this.inputRef = ref}
            style={inputStyle}
            placeholderTextColor={CustomColors.graySmooth}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            onChangeText={this.props.onChangeText}
          />
        </TextInputContainer>
        <CloseIconInputTouchableOpacity
          style={closeIconStyle}
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
        { this.state.isCollapsed ? this.getCollapsedHeader() : this.getSearchbarHeader() }
      </ContainerView>
    );
  }
}
