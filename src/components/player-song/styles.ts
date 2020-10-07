import styled from "styled-components/native";
import {Animated} from "react-native";
import {ViewAnimatedProps} from "../../utils/animation-type";
import {IconClose} from "../../../assets/images/icon-close";
import {IconPlayColorFul} from "../../../assets/images/icon-play-colorful";
import {IconRetry} from "../../../assets/images/icon-retry";
import LinearGradient from 'react-native-linear-gradient';
import {PercentageScreen} from "../../utils/percentage-screen";

const contentSize = PercentageScreen.getHeight(30);

export const PlayerSongStyle = {
  Container: styled(Animated.View)<ViewAnimatedProps>`
    background-color: black;
    position: absolute;
    bottom: 0;
    width: 100%;
  `,
  MaximizedContainer: styled(Animated.View)<ViewAnimatedProps>`
    position: absolute;
    top: 0;
    width: 100%;
  `,
  MaximizedTopView: styled.View`
     flex-direction: row;
     justify-content: space-between;
     margin: 25px;
  `,
  MaximizedIconTouchable: styled.TouchableOpacity``,
  MaximizedCollapseIcon: styled(IconRetry)`
    color: white;
  `,
  MaximizedCloseIcon: styled(IconClose)`
    color: white;
  `,
  MaximizedTitleGradient: styled(LinearGradient)`
    align-self: center;
  `,
  MaximizedTitleView: styled.View`
    background-color: black;
    margin-bottom: 1px;
  `,
  MaximizedTitleText: styled.Text`
    margin-bottom: 10px;
    margin-horizontal: 10%;
    text-align: center;
    background-color: black;
    opacity: 0.8;
    color: white;
  `,
  MaximizedContentContainer: styled.View`
    width: 100%;
    height: ${contentSize};
    margin-vertical: 50px;
    justify-content: center;
  `,
  MaximizedSongImage: styled.Image`
    height: ${contentSize};
    width: ${contentSize};
    border-radius: ${contentSize};
    border-width: 2px;
    border-color: yellow;
    align-self: center;
  `,
  MaximizedVideo: styled.View`
    width: 100%;
    height: 100%;
    background-color: violet;
  `,
  MaximizedNameFirstText: styled.Text`
    margin-horizontal: 10%;
    text-align: center;
    color: white;
    font-weight: bold;
  `,
  MaximizedNameSecondText: styled.Text`
    margin-horizontal: 10%;
    text-align: center;
    color: white;
    font-weight: bold;
  `,
  MaximizedPlayerContent: styled.View`

  `,
  MaximizedPlayerLeftIcon: styled(IconPlayColorFul)``,
  MaximizedPlayerStartIcon: styled(IconPlayColorFul)``,
  MaximizedPlayerRightIcon: styled(IconPlayColorFul)``,
  MinimizedContainer: styled(Animated.View)<ViewAnimatedProps>`
    position: absolute;
    top: 0;
    flex-direction: row;
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
