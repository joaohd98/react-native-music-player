import styled from 'styled-components/native';
import {IconSearch} from '../../../assets/icons/icon-search';
import {
  Animated, TextInput, TouchableOpacity,
} from 'react-native';
import {CustomFonts} from '../../theme/fonts';
import {CustomColors} from '../../theme/colors';
import {IconClose} from '../../../assets/icons/icon-close';
import {
  TextAnimatedProps,
  TextInputAnimatedProps,
  TouchableOpacityAnimatedProps,
  ViewAnimatedProps
} from "../../utils/animation-type";

const InputAnimated = Animated.createAnimatedComponent(TextInput)
const TouchableAnimated = Animated.createAnimatedComponent(TouchableOpacity)

export const HeaderStyles = {
  ContainerView: styled.View`
    flex-direction: row;
    margin: 15px;
  `,
  TitleText: styled(Animated.Text)<TextAnimatedProps>`
    flex: 1;
    font-size: 20px;
    text-align: center;
    font-family: ${CustomFonts.circularStdMedium};
    color: ${CustomColors.gray};
    margin-left: 24px;
    padding: 15px
  `,
  SearchIcon: styled(IconSearch)``,
  SearchIconTouchableOpacity: styled(TouchableAnimated)<TouchableOpacityAnimatedProps>`
    justify-content: center;
  `,
  TextInputContainer: styled.View`
    flex: 1;
    margin-right: 20px; 
  `,
  TextInput: styled(InputAnimated)<TextInputAnimatedProps>`
    padding: 15px 15px 15px 45px;
    color: ${CustomColors.white};
    font-size: 16px;
    font-family: ${CustomFonts.circularStdBook};
    border-radius: 20px;
    background-color: ${CustomColors.blueSmooth};
  `,
  IconContainer: styled(Animated.View)<ViewAnimatedProps>`
    position: absolute;
    z-index: 100;
    margin-top: 12px;
    margin-left: 12px;
  `,
  IconInput: styled(IconSearch)``,
  CloseIconInput: styled(IconClose)``,
  CloseIconInputTouchableOpacity: styled(TouchableAnimated)<TouchableOpacityAnimatedProps>`
    justify-content: center;
  `,
};
