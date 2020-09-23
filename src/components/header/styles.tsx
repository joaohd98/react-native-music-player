import styled from 'styled-components/native';
import {IconSearch} from '../../../assets/icons/icon-search';
import {
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import {CustomFonts} from '../../theme/fonts';
import {CustomColors} from '../../theme/colors';
import {IconProps} from '../../../assets/icons/props';
import {IconClose} from '../../../assets/icons/icon-close';

export const HeaderStyles = {
  ContainerView: styled.View<ViewProps>`
    flex-direction: row;
    margin: 15px;
  `,
  TitleText: styled.Text<TextProps>`
    flex: 1;
    font-size: 20px;
    text-align: center;
    font-family: ${CustomFonts.circularStdMedium};
    color: ${CustomColors.gray};
  `,
  SearchIcon: styled(IconSearch)``,
  SearchIconTouchableOpacity: styled.TouchableOpacity<TouchableOpacityProps>``,
  TextInput: styled.TextInput<TextInputProps>`
    flex: 1;
    margin-right: 20px;
    padding: 15px 15px 15px 45px;
    color: ${CustomColors.white};
    font-size: 16px;
    font-family: ${CustomFonts.circularStdBook};
    border-radius: 20px;
    background-color: ${CustomColors.blueSmooth};
  `,
  IconContainer: styled.View`
    position: absolute;
    z-index: 100;
    margin-top: 12px;
    margin-left: 12px;
  `,
  IconInput: styled(IconSearch)<IconProps>``,
  CloseIconInput: styled(IconClose)<IconProps>``,
  CloseIconInputTouchableOpacity: styled.TouchableOpacity<
    TouchableOpacityProps
  >`
    justify-content: center;
  `,
};
