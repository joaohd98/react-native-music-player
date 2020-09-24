import * as React from "react"
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  Text,
  TSpan,
  Rect,
} from "react-native-svg"
import {IconProps} from './props';

export const IconTabHome = (props: IconProps) => {
  return (
    <Svg
      width={props.widthIcon}
      height={props.heightIcon}
      viewBox="0 0 30 39">
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h30v39H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Discover" fill="#63666e" clipPath="url(#prefix__a)">
        <Text
          transform="translate(15 36)"
          fontSize={10}
          fontFamily="CircularStd-Book, Circular Std"
          letterSpacing=".04em"
        >
          <TSpan x={-14.145} y={0}>
            {"Home"}
          </TSpan>
        </Text>
        <G data-name="Group 2060" transform="translate(-737 -918)">
          <Rect
            data-name="Rectangle 1329"
            width={9}
            height={9}
            rx={1}
            transform="translate(742 918)"
          />
          <Rect
            data-name="Rectangle 1330"
            width={9}
            height={9}
            rx={1}
            transform="translate(742 930)"
          />
          <Rect
            data-name="Rectangle 1331"
            width={9}
            height={9}
            rx={1}
            transform="translate(753 930)"
          />
          <Rect
            data-name="Rectangle 1332"
            width={9}
            height={9}
            rx={4.5}
            transform="translate(753 918)"
          />
        </G>
      </G>
    </Svg>
  );
};
