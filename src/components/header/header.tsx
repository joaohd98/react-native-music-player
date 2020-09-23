import React from 'react';
import {CustomHeaderProps} from './props';
import {CustomHeaderState} from './state';
import {HeaderStyles} from './styles';
import {CustomColors} from '../../theme/colors';

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
