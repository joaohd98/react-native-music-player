import React from "react";
import {ContainerStyles} from "./styles";
import {ContainerProps} from "./props";

export class Container extends React.Component<ContainerProps> {
  render() {
    const {
      View
    } = ContainerStyles

    return (
      <View style={this.props.style}>
        { this.props.children }
      </View>
    )
  }
}
