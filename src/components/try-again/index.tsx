import React from "react";
import {TryAgainProps} from "./props";
import {TryAgainStyle} from "./styles";

export class TryAgainView extends React.Component<TryAgainProps> {
  render() {
    const {
      ContainerView,
      FirstLineText,
      SecondsLineText,
      TouchableButton,
      TouchableText
    } = TryAgainStyle

    return (
      <ContainerView>
        <FirstLineText>Something wrong happened</FirstLineText>
        <SecondsLineText>{this.props.text}</SecondsLineText>
        <TouchableButton onPress={this.props.onPress}>
          <TouchableText>Try Again</TouchableText>
        </TouchableButton>
      </ContainerView>
    );
  }
}
