import {Animated} from "react-native";

export interface UriImageState {
  animatedError: Animated.Value,
  hasError: boolean,
  animatedLoading: Animated.Value,
  isLoading: boolean,
  uri: string
}
