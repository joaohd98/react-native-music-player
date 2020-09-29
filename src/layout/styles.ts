import styled from 'styled-components/native';
import {CustomColors} from '../theme/colors';

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
