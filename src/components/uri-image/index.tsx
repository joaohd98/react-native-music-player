import React from "react";
import {UriImageProps} from "./props";
import {UriImageState} from "./state";
import {UriImageStyles} from "./styles";
import {Animated} from "react-native";
import {CustomColors} from "../../theme/colors";

export class UriImage extends React.Component<UriImageProps, UriImageState> {
  state: UriImageState = {
    animatedError: new Animated.Value(0),
    animatedLoading: new Animated.Value(0),
    hasError: false,
    isLoading: true,
    uri: this.props.uri
  }

  onStartLoading = () => {
    this.setState({isLoading: true, hasError: false})
  }

  onEndLoading = () => {
    this.setState({isLoading: false})
  }

  onErrorLoading = () => {
    this.setState({hasError: true, isLoading: false})
  }

  retryLoadImage = () => {
    this.setState({
      uri: this.props.uri + "?" + new Date().getTime().toString()
    })
  }

  render() {
    const {
      Container,
      Image,
      ActivityIndicator,
      ErrorView,
      ErrorTouchable,
      ErrorIcon
    } = UriImageStyles

    return (
      <Container>
        <Image
          key={this.state.uri}
          isLoadingOrError={this.state.hasError || this.state.isLoading}
          style={this.props.style}
          source={{uri: this.state.uri}}
          onLoadStart={this.onStartLoading}
          onLoadEnd={this.onEndLoading}
          onError={this.onErrorLoading}
        />
        <ActivityIndicator
          isLoading={this.state.isLoading}
          size={"large"}
          color={CustomColors.orange}
        />
        <ErrorView hasError={this.state.hasError}>
          <ErrorTouchable onPress={this.retryLoadImage} disabled={!this.state.hasError}>
            <ErrorIcon widthIcon={30} heightIcon={30} />
          </ErrorTouchable>
        </ErrorView>
      </Container>
    )
  }
}

