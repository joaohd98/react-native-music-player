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
  getTabIcon: (name: String, focused: boolean) => {
    const props: SvgProps = {
      widthIcon: 48,
      heightIcon: 48
    }
    switch (name) {
      case "Home": {
        return focused ? IconTabHomeSelected(props) : IconTabHome(props)
      }
      case "Songs": {
        return focused ? IconTabSongSelected(props) : IconTabSong(props)
      }
    }
  },
  getBottomTabBarOptions: (): BottomTabBarOptions => ({
    keyboardHidesTabBar: true,
    showLabel: false,
    style: {
      backgroundColor: CustomColors.tabBarColor,
      marginTop: 16,
      borderTopWidth: 0,
    },
  })
};
