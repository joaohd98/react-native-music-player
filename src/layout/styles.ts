import styled from 'styled-components/native';
import {CustomColors} from '../theme/colors';
import {IconTabHomeSelected} from "../../assets/images/icon-tab-home-selected";
import {IconTabHome} from "../../assets/images/icon-tab-home";
import {IconTabSongSelected} from "../../assets/images/icon-tab-song-selected";
import {IconTabSong} from "../../assets/images/icon-tab-song";
import {SvgProps} from "../../assets/images/props";
import {BottomTabBarOptions} from "@react-navigation/bottom-tabs";

export const LayoutStyles = {
  SafeAreaViewTop: styled.SafeAreaView`
    flex: 0;
    background: ${CustomColors.backgroundColor};
  `,
  Container: styled.View`
    flex: 1;
    background: ${CustomColors.tabBarColor};
  `,

};
