import React from "react";
import {TryAgainProps} from "./props";
import {TryAgainStyle} from "./styles";

export class TryAgainView extends React.Component<TryAgainProps> {
  render() {
    const {
      ContainerView,
      FirstLineText,
      SecondLineText,
      TouchableButton,
      TouchableText
    } = TryAgainStyle

    return (
      <ContainerView>
        <FirstLineText>Something wrong happened</FirstLineText>
        <SecondLineText>{this.props.text}</SecondLineText>
        <TouchableButton onPress={this.props.onPress}>
          <TouchableText>Try Again</TouchableText>
        </TouchableButton>
      </ContainerView>
    );
  }
}
