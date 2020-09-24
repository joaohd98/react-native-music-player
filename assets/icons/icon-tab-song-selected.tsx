import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text,
  TSpan,
  G,
  Path,
} from "react-native-svg"
import {IconProps} from './props';

export const IconTabSongSelected = (props: IconProps) => {
  return (
    <Svg width={props.widthIcon} height={props.heightIcon} viewBox="0 0 30 39" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ed8770" />
          <Stop offset={1} stopColor="#d9519d" />
        </LinearGradient>
      </Defs>
      <Text
        data-name="Songs"
        transform="translate(0 36)"
        fill="#d9519d"
        fontSize={10}
        fontFamily="CircularStd-Book, Circular Std"
        letterSpacing=".04em"
      >
        <TSpan x={0} y={0}>
          {"Songs"}
        </TSpan>
      </Text>
      <G data-name="001-music">
        <G data-name="Group 2059">
          <Path
            data-name="Path 68417"
            d="M37.258 4.2v12.9a4.959 4.959 0 00-2.52-.64c-2.119 0-3.78 1.107-3.78 2.52s1.66 2.52 3.78 2.52 3.78-1.107 3.78-2.52V8.888L48.6 5.528v7.792a4.959 4.959 0 00-2.52-.64c-2.119 0-3.78 1.107-3.78 2.52s1.661 2.52 3.78 2.52 3.78-1.107 3.78-2.52V0z"
            transform="translate(-25.958)"
            fill="url(#prefix__a)"
          />
        </G>
      </G>
    </Svg>
  );
};
