import styled from 'styled-components/native';
import {ActivityIndicator, Animated} from "react-native";
import {IconRetry} from "../../../assets/images/icon-retry";
import {IconClose} from "../../../assets/images/icon-close";
import {CustomColors} from "../../theme/colors";

const animatedIndicator = Animated.createAnimatedComponent(ActivityIndicator)

export const UriImageStyles = {
  Container: styled.View`
    border-radius: 20px;
    border-color: rgba(255, 255, 255, .1);
    border-width: 3px;
  `,
  Image: styled(Animated.Image)<{isLoadingOrError: boolean}>`
    opacity: ${props => props.isLoadingOrError ? 0 : 1};
  `,
  ActivityIndicator: styled(animatedIndicator)<{isLoading: boolean}>`
    opacity: ${props => props.isLoading ? 1: 0};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  `,
  ErrorView: styled.View<{hasError: boolean}>`
    opacity: ${props => props.hasError ? 1: 0};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
  `,
  ErrorTouchable: styled.TouchableOpacity`
    padding: 20px;
  `,
  ErrorIcon: styled(IconRetry)`

  `
}
