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

  getMaximizedContent = () => {
    const {
      MaximizedContainer,
      MaximizedTopView,
      MaximizedIconTouchable,
      MaximizedCollapseIcon,
      MaximizedCloseIcon,
      MaximizedTitleContent,
      MaximizedTitleText,
      MaximizedUnderlineText,
    } = PlayerSongStyle

    const style = this.playerSongAnimated.getMaximizedStyle(this.state.dragAnimation)

    return (
      <MaximizedContainer style={style}>
        <MaximizedTopView>
          <MaximizedIconTouchable>
            <MaximizedCollapseIcon widthIcon={30} heightIcon={30}/>
          </MaximizedIconTouchable>
          <MaximizedIconTouchable>
            <MaximizedCloseIcon widthIcon={30} heightIcon={30} />
          </MaximizedIconTouchable>
        </MaximizedTopView>
        <MaximizedTitleContent>
          <MaximizedTitleText>
            FASE 1 - DEVELOPMENT ENVIRONMENT
          </MaximizedTitleText>
          <MaximizedUnderlineText />
        </MaximizedTitleContent>
      </MaximizedContainer>
    )

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

    const style = this.playerSongAnimated.getMinimizedStyle(this.state.dragAnimation)

    return (
      <MinimizedContainer style={style}>
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
        { this.getMaximizedContent() }
        { this.getMinimizedContent() }
      </Container>
    );
  }
}
