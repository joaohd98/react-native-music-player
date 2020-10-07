import {
  Animated, ImageProps, ImageStyle,
  StyleProp,
  TextInputProps,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle
} from "react-native";

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type ViewAnimatedProps
  = Overwrite<ViewProps, { style: Animated.AnimatedProps<StyleProp<ViewStyle>> }>

export type ImageAnimatedProps
  = Overwrite<ImageProps, { style: Animated.AnimatedProps<StyleProp<ImageStyle>> }>

export type TextAnimatedProps
  = Overwrite<TextProps, { style: Animated.AnimatedProps<StyleProp<TextStyle>> }>

export type TextInputAnimatedProps
  = Overwrite<TextInputProps, { style: Animated.AnimatedProps<StyleProp<TextStyle>> }>

export type TouchableOpacityAnimatedProps
  = Overwrite<TouchableOpacityProps, { style: Animated.AnimatedProps<StyleProp<ViewStyle>> }>
