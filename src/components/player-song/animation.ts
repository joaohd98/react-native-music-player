import {Animated, PanResponder, PanResponderInstance, StyleProp, TextStyle, ViewStyle} from "react-native";

type AnimatedViewStyle = Animated.AnimatedProps<StyleProp<ViewStyle>>

export class PlayerSongAnimated {
  private panResponder: PanResponderInstance
  private panAnimationValue = 0
  private readonly height: number

  constructor(dragAnimation: Animated.Value, getExpanded: () => boolean, setExpanded: (value: boolean) => void,  height: number) {
    this.height = height
    this.panResponder = this.getPanResponder(dragAnimation, getExpanded, setExpanded)

    dragAnimation.addListener((animation) => {
      this.panAnimationValue = animation.value
    })
  }

  private getPanResponder = (dragAnimation: Animated.Value, getExpanded: () => boolean, setExpanded: (value: boolean) => void) => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        dragAnimation.extractOffset();
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dy: dragAnimation }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        dragAnimation.flattenOffset();

        const isExpanded = getExpanded()
        const height = this.height

        const toValue = isExpanded ? 0 : height
        const toValueInverse = isExpanded ? height : 0

        if(this.panAnimationValue < 0 || this.panAnimationValue > height) {
          dragAnimation.setValue(toValueInverse)
        }

        else if(this.panAnimationValue <= 75 || this.panAnimationValue >= height - 75) {
          Animated.spring(dragAnimation, {
            toValue: toValueInverse,
            useNativeDriver: false
          }).start()
        }

        else {
          Animated.spring(dragAnimation, {
            toValue,
            useNativeDriver: false
          }).start()

          setExpanded(!isExpanded)
        }
      }
    })
  }

  getHandler = () => {
    return this.panResponder.panHandlers
  }

  changeVisibilityPlayer = (animation: Animated.Value, isOpen: boolean) => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start()
  }

  getContainerStyle = (
    heightAnimation: Animated.Value,
    dragAnimation: Animated.Value
  ): AnimatedViewStyle => {

    const visibleAnimation = heightAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"]
    })

    const translateY = dragAnimation.interpolate({
      inputRange: [0, this.height],
      outputRange: [0, this.height - 130],
      extrapolate: 'clamp'
    })

    return {
      height: visibleAnimation,
      transform: [{translateY}],
    }
  }
}
