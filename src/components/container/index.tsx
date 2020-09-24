import React from "react";
import {ContainerStyles} from "./styles";

export class Container extends React.Component {
  render() {
    const {
      View
    } = ContainerStyles

    return (
      <View>
        { this.props.children }
      </View>
    )
  }
}
