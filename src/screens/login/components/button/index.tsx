import React from "react";
import {LoginButtonProps} from "./props";
import {CustomColors} from "../../../../theme/colors";
import {LoginButtonStyles} from "./styles";

export class LoginButtonView extends React.Component<LoginButtonProps> {

  getInnerContent(): Element {
    const {TouchableImage, ActivityIndicator} = LoginButtonStyles

    if(this.props.disabled) {
      return <ActivityIndicator size="large" color={CustomColors.spotifyColor}/>
    }
    else {
      return <TouchableImage heightIcon={50}  widthIcon={160} />
    }
  }

  render() {
    const {TouchableOpacity} = LoginButtonStyles

    return (
      <TouchableOpacity onPress={this.props.onPress}  disabled={this.props.disabled}>
        {this.getInnerContent()}
      </TouchableOpacity>
    );
  }
}
