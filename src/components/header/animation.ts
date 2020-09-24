import {Animated, StyleProp, TextStyle} from "react-native";

export class HeaderAnimation {
  static timingAnimation(animated: Animated.Value, condition: boolean, setState: (state: object, callback: () => void) => void, callback: () => void) {
    animated.setValue(1)

    Animated.timing(animated, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setState({isCollapsed: condition}, () => {
        Animated.timing(animated, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }).start(() => {
          callback()
        })
      });
    })
  }

  static getOpacityEffect(animated: Animated.Value): Animated.AnimatedProps<StyleProp<TextStyle>> {
    return {
      opacity: animated
    }
  }

  static getScaleYEffect(animated: Animated.Value): Animated.AnimatedProps<StyleProp<TextStyle>> {
    return {
      transform: [
        {
          scaleY: animated
        }
      ]
    }
  }

  static getOpacityHalfEffect(animated: Animated.Value): Animated.AnimatedProps<StyleProp<TextStyle>> {
    return {
      opacity: animated.interpolate({
        inputRange: [0.5, 1],
        outputRange: [0, 1]
      })
    }
  }
}
