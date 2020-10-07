import {Animated, PanResponder, PanResponderInstance, StyleProp, TextStyle, ViewStyle} from "react-native";

type AnimatedViewStyle = Animated.AnimatedProps<StyleProp<ViewStyle>>

export class PlayerSongAnimated {
  private panResponder: PanResponderInstance
  private panAnimationValue = 0
  private readonly height: number
  private readonly sizeAnimation = 75

  constructor(dragAnimation: Animated.Value, getExpanded: () => boolean, setExpanded: (value: boolean) => void,  height: number) {
    this.height = height

    dragAnimation.addListener((animation) => {
      this.panAnimationValue = animation.value
    })

    this.panResponder = this.getPanResponder(dragAnimation, getExpanded, setExpanded)
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

        const toValue = isExpanded ? height : 0
        const toValueInverse = isExpanded ? 0 : height

        if(this.panAnimationValue < 0 || this.panAnimationValue > height) {
          dragAnimation.setValue(toValueInverse)
        }

        else if(this.panAnimationValue <= this.sizeAnimation || this.panAnimationValue >= height - this.sizeAnimation) {
          Animated.timing(dragAnimation, {
            toValue: toValueInverse,
            duration: 300,
            useNativeDriver: false
          }).start()
        }

        else {
          Animated.timing(dragAnimation, {
            toValue,
            duration: 300,
            useNativeDriver: false
          }).start(() => {
            setExpanded(!isExpanded)
          })
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
      outputRange: [0, this.height - this.sizeAnimation * 2],
      extrapolate: 'clamp'
    })

    return {
      height: visibleAnimation,
      transform: [{translateY}],
    }
  }

  getMinimizedStyle = (dragAnimation: Animated.Value): AnimatedViewStyle => {
    return {
      opacity: dragAnimation.interpolate({
        inputRange: [this.height - this.sizeAnimation * 3, this.height],
        outputRange: [0, 1],
        extrapolate: "clamp"
      })
    }
  }
}
