import React from "react";
import {PlayerSongProp} from "./props";
import {PlayerSongState} from "./state";
import {PlayerSongStyle} from "./styles";
import {Animated, Dimensions} from "react-native";
import {PlayerSongAnimated} from "./animation";

export class PlayerSong extends React.Component<PlayerSongProp, PlayerSongState> {
  state: PlayerSongState = {
    heightAnimation: new Animated.Value(0),
    dragAnimation: new Animated.Value(0),
    isExpanded: true
  }

  playerSongAnimated = new PlayerSongAnimated(
    this.state.dragAnimation,
    () => this.state.isExpanded,
    (isExpanded) => this.setState({isExpanded}),
    this.props.height
  )

  componentDidUpdate(prevProps: Readonly<PlayerSongProp>, prevState: Readonly<PlayerSongState>, snapshot?: any) {
    if(this.props.isOpen != prevProps.isOpen) {
      this.playerSongAnimated.changeVisibilityPlayer(this.state.heightAnimation, this.props.isOpen)
    }
  }

  getMinimizedContent = () => {
    const {
      MinimizedContainer,
      MinimizedImagePlaceholder,
      MinimizedTextView,
      MinimizedFirstText,
      MinimizedSecondaryText,
      MinimizedPlayPauseIcon,
      MinimizedCloseIcon,
      MinimizedIconTouchable
    } = PlayerSongStyle

    return (
      <MinimizedContainer style={{opacity: this.state.isExpanded ? 0 : 1}}>
        <MinimizedImagePlaceholder />
        <MinimizedTextView>
          <MinimizedFirstText>Name of content</MinimizedFirstText>
          <MinimizedSecondaryText>Name of course</MinimizedSecondaryText>
        </MinimizedTextView>
        <MinimizedIconTouchable>
          <MinimizedPlayPauseIcon widthIcon={30} heightIcon={30} />
        </MinimizedIconTouchable>
        <MinimizedIconTouchable>
          <MinimizedCloseIcon widthIcon={30} heightIcon={30}  />
        </MinimizedIconTouchable>
      </MinimizedContainer>
    )

  }

  render() {
    const {Container} = PlayerSongStyle
    const {heightAnimation, dragAnimation} = this.state

    const styleContainer = this.playerSongAnimated.getContainerStyle(heightAnimation, dragAnimation)
    const handler = this.playerSongAnimated.getHandler()

    return (
      <Container {...handler} style={styleContainer}>
        {this.getMinimizedContent()}
      </Container>
    );
  }
}
