import styled from 'styled-components/native';
import {CustomColors} from '../theme/colors';
import {IconTabHomeSelected} from "../../assets/icons/icon-tab-home-selected";
import {IconTabHome} from "../../assets/icons/icon-tab-home";
import {IconTabSongSelected} from "../../assets/icons/icon-tab-song-selected";
import {IconTabSong} from "../../assets/icons/icon-tab-song";
import {IconProps} from "../../assets/icons/props";

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
    const props: IconProps = {
      widthIcon: 48,
      heightIcon: 48
    }

    console.log("name", name)
    console.log("name", focused)

    switch (name) {
      case "Home": {
        return focused ? IconTabHomeSelected(props) : IconTabHome(props)
      }
      case "Songs": {
        return focused ? IconTabSongSelected(props) : IconTabSong(props)
      }
    }
  }
};
