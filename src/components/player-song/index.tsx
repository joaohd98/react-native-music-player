import React from "react";
import {PlayerSongProp} from "./props";
import {PlayerSongState} from "./state";
import {PlayerSongStyle} from "./styles";
import {Animated, Image, View} from "react-native";
import {PlayerSongAnimated} from "./animation";

const linearGradientColors = [
  "rgba(255, 255, 255, 0)",
  "rgba(255, 255, 255, 0.5)",
  "rgba(255, 255, 255, 1)",
  "rgba(255, 255, 255, 1)",
  "rgba(255, 255, 255, 0.5)",
  "rgba(255, 255, 255, 0)",
]
const locations = [0.1, 0.2, 0.3, 0.7, 0.8, 0.9]
const uri = "https://www.w3schools.com/w3css/img_lights.jpg"

export class PlayerSong extends React.Component<PlayerSongProp, PlayerSongState> {
  minimizedContent: View | null = null
  maximizedContainerSong: View | null = null
  maximizedContainerVideo: View | null = null

  state: PlayerSongState = {
    heightAnimation: new Animated.Value(0),
    dragAnimation: new Animated.Value(0),
    isExpanded: true,
    imagePosition: new Animated.ValueXY({x: 0, y: 0}),
    imageSize: new Animated.ValueXY({x: 0, y: 0})
  }

  playerSongAnimated = new PlayerSongAnimated(
    this.state.dragAnimation,
    () => this.state.isExpanded,
    (isExpanded) => this.setState({isExpanded}),
    this.props.height
  )

  mountContent = () => {
    const container = this.props.mediaType == "audio" ? this.maximizedContainerSong : this.maximizedContainerVideo

    container?.measure((x, y, width, height) => {
      this.state.imagePosition.setValue({ x: x, y: y});
      this.state.imageSize.setValue({ x: width, y: height});
    })
  }

  componentDidUpdate(prevProps: Readonly<PlayerSongProp>, prevState: Readonly<PlayerSongState>, snapshot?: any) {
    if(this.props.isOpen != prevProps.isOpen) {
      this.playerSongAnimated.changeVisibilityPlayer(this.state.heightAnimation, this.props.isOpen)
    }
  }

  getMaximizedContent = () => {
    const {
      MaximizedContainer,
      MaximizedHeaderAnimated,
      MaximizedTopView,
      MaximizedIconTouchable,
      MaximizedCollapseIcon,
      MaximizedCloseIcon,
      MaximizedTitleGradient,
      MaximizedTitleView,
      MaximizedTitleText,
      MaximizedVideoContainer,
      MaximizedSongContainer,
      MaximizedBottomAnimated,
      MaximizedNameContainer,
      MaximizedNameFirstText,
      MaximizedNameSecondText,
      MaximizedPlayerContent,
      MaximizedPlayerLeftIcon,
      MaximizedPlayerStartIcon,
      MaximizedPlayerRightIcon,
      ProgressBarContainer,
      ProgressBarView,
      ProgressBarBall,
      ProgressBarComplete,
      ProgressBarTextContainer,
      ProgressBarTimerText,
      ProgressBarDurationText
    } = PlayerSongStyle

    const styleTop = this.playerSongAnimated.getMaximizedTopStyle(this.state.dragAnimation)
    const styleBottom = this.playerSongAnimated.getMaximizedBottomStyle(this.state.dragAnimation)

    return (
      <MaximizedContainer>
        <MaximizedHeaderAnimated style={styleTop}>
          <MaximizedTopView>
            <MaximizedIconTouchable>
              <MaximizedCollapseIcon widthIcon={30} heightIcon={30}/>
            </MaximizedIconTouchable>
            <MaximizedIconTouchable>
              <MaximizedCloseIcon widthIcon={30} heightIcon={30} />
            </MaximizedIconTouchable>
          </MaximizedTopView>
          <MaximizedTitleGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} colors={linearGradientColors} locations={locations}>
            <MaximizedTitleView>
              <MaximizedTitleText numberOfLines={1}>
                FASE 1 - Development Enviromnent
              </MaximizedTitleText>
            </MaximizedTitleView>
          </MaximizedTitleGradient>
        </MaximizedHeaderAnimated>
          {
            this.props.mediaType == "audio" ?
              <MaximizedSongContainer ref={ref => this.maximizedContainerSong = ref} onLayout={this.mountContent} /> :
              <MaximizedVideoContainer ref={ref => this.maximizedContainerVideo = ref} onLayout={this.mountContent} />
          }
        <MaximizedBottomAnimated style={styleBottom}>
          <MaximizedNameContainer>
            <MaximizedNameFirstText>AUDIO BOOK | CAP3</MaximizedNameFirstText>
            <MaximizedNameSecondText>IOT</MaximizedNameSecondText>
          </MaximizedNameContainer>
          <MaximizedPlayerContent>
            <MaximizedPlayerLeftIcon widthIcon={40} heightIcon={40} />
            <MaximizedPlayerStartIcon widthIcon={60} heightIcon={60} />
            <MaximizedPlayerRightIcon widthIcon={40} heightIcon={40} />
          </MaximizedPlayerContent>
          <ProgressBarContainer>
            <ProgressBarView>
              <ProgressBarComplete />
              <ProgressBarBall />
            </ProgressBarView>
            <ProgressBarTextContainer>
              <ProgressBarTimerText>00:58</ProgressBarTimerText>
              <ProgressBarDurationText>32:42</ProgressBarDurationText>
            </ProgressBarTextContainer>
          </ProgressBarContainer>
        </MaximizedBottomAnimated>
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
        <MinimizedImagePlaceholder ref={ref => this.minimizedContent = ref}/>
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

  getMedia = () => {
    const {SongImage, Video} = PlayerSongStyle

    const styleImage = this.playerSongAnimated.getSongStyle(this.state.imageSize, this.state.imagePosition)
    const styleVideo = this.playerSongAnimated.getVideoStyle(this.state.imageSize, this.state.imagePosition)

    return (
      this.props.mediaType == "audio" ?
        <SongImage style={styleImage} source={{uri}} /> :
        <Video style={styleVideo}/>
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
        { this.getMedia() }
      </Container>
    );
  }
}
