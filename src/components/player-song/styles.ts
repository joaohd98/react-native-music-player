import styled from "styled-components/native";
import {Animated} from "react-native";
import {ViewAnimatedProps} from "../../utils/animation-type";
import {IconClose} from "../../../assets/images/icon-close";
import {IconPlayColorFul} from "../../../assets/images/icon-play-colorful";

export const PlayerSongStyle = {
  Container: styled(Animated.View)<ViewAnimatedProps>`
    background-color: black;
    position: absolute;
    bottom: 0;
    width: 100%;
  `,
  MinimizedContainer: styled(Animated.View)<ViewAnimatedProps>`
    bottom: 0;
    flex-direction: row;
    background-color: black;
    height: 70px;
    width: 100%;
  `,
  MinimizedImagePlaceholder: styled.View`
    width: 120px;
    height: 100%;
    background-color: red;
  `,
  MinimizedTextView: styled.View`
    margin-horizontal: 10px;
    justify-content: center;
    flex: 1;
  `,
  MinimizedFirstText: styled.Text`
    color: white;
  `,
  MinimizedSecondaryText: styled.Text`
    color: white;
  `,
  MinimizedIconTouchable: styled.TouchableOpacity`
    justify-content: center;
    margin-right: 20px;
  `,
  MinimizedPlayPauseIcon: styled(IconPlayColorFul)`
    
  `,
  MinimizedCloseIcon: styled(IconClose)`
  `,

}
