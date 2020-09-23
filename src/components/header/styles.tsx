import styled from 'styled-components/native';
import {SearchIcon} from '../../../assets/icons/search';
import {TextInputProps, TouchableOpacityProps} from 'react-native';

export const HeaderStyles = {
  TitleText: styled.Text``,
  SearchIcon: styled(SearchIcon)``,
  SearchIconTouchableOpacity: styled.TouchableOpacity<TouchableOpacityProps>``,
  TextInput: styled.TextInput<TextInputProps>``,
  IconInput: styled(SearchIcon)``,
  CloseIconInput: styled(SearchIcon)``,
  CloseIconInputTouchableOpacity: styled.TouchableOpacity<
    TouchableOpacityProps
  >``,
};
