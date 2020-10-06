import styled from "styled-components/native";
import {Animated} from "react-native";
import {ViewAnimatedProps} from "../../utils/animation-type";

export const PlayerSongStyle = {
  Container: styled(Animated.View)<ViewAnimatedProps>`
    background-color: violet;
    position: absolute;
    bottom: 0;
    width: 100%;
  `
}
