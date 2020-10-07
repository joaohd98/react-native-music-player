import styled from "styled-components/native";
import {Animated} from "react-native";
import {ViewAnimatedProps} from "../../utils/animation-type";
import {IconClose} from "../../../assets/images/icon-close";
import {IconPlayColorFul} from "../../../assets/images/icon-play-colorful";
import {IconRetry} from "../../../assets/images/icon-retry";
import LinearGradient from 'react-native-linear-gradient';
import {PercentageScreen} from "../../utils/percentage-screen";

const contentSize = PercentageScreen.getHeight(30);
const marginBetween  = PercentageScreen.getHeight(5);

export const PlayerSongStyle = {
  Container: styled(Animated.View)<ViewAnimatedProps>`
    background-color: black;
    position: absolute;
    bottom: 0;
    width: 100%;
  `,
  MaximizedContainer: styled.View`
    position: absolute;
    top: 0;
    width: 100%;
  `,
  MaximizedHeaderAnimated: styled(Animated.View)<ViewAnimatedProps>``,
  MaximizedTopView: styled.View`
     flex-direction: row;
     justify-content: space-between;
     margin-horizontal: 25px;
     margin-vertical: ${marginBetween};
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
    margin-vertical: ${PercentageScreen.getHeight(7.5)};
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
  MaximizedBottomAnimated: styled(Animated.View)<ViewAnimatedProps>``,
  MaximizedNameContainer: styled.View`
    margin-horizontal: 10%;
  `,
  MaximizedNameFirstText: styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
  `,
  MaximizedNameSecondText: styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
  `,
  MaximizedPlayerContent: styled.View`
    flex-direction: row;
    margin-vertical: ${marginBetween};
    justify-content: center;
    align-items: center;
  `,
  MaximizedPlayerLeftIcon: styled(IconPlayColorFul)`
    margin-right: 30px;
  `,
  MaximizedPlayerStartIcon: styled(IconPlayColorFul)``,
  MaximizedPlayerRightIcon: styled(IconPlayColorFul)`
    margin-left: 30px;
  `,
  ProgressBarContainer: styled.View`
    width: 85%;
    margin-horizontal: 7.5%;
  `,
  ProgressBarView: styled.View`
    height: 2px;
    width: 100%;
    background-color: white;
    flex-direction: row;
  `,
  ProgressBarComplete: styled.View`
    background-color: violet;
    height: 2px;
    width: 20%;
  `,
  ProgressBarBall: styled.View`
    height: 18px;
    width: 18px;
    border-radius: 15px;
    background-color: violet;
    margin-top: -8px;
  `,
  ProgressBarTextContainer: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  `,
  ProgressBarTimerText: styled.Text`
    color: white;
    opacity: 0.8;
  `,
  ProgressBarDurationText: styled.Text`
    color: white;
    opacity: 0.8;
  `,
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
