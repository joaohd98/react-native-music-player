import {Animated} from "react-native";

export interface PlayerSongState {
  heightAnimation: Animated.Value,
  dragAnimation: Animated.Value,
  isExpanded: boolean
}
