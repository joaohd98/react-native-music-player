import * as React from "react"
import {SvgProps} from './props';
import Svg, { Text, TSpan, G, Path } from "react-native-svg"

export const IconTabSong = (props: SvgProps) => {
  return (
    <Svg width={props.widthIcon} height={props.heightIcon} viewBox="0 0 30 39">
      <Text
        data-name="Songs"
        transform="translate(0 36)"
        fill="#fff"
        fontSize={10}
        fontFamily="CircularStd-Book, Circular Std"
        letterSpacing=".04em"
        opacity={0.28}
      >
        <TSpan x={0} y={0}>
          {"Songs"}
        </TSpan>
      </Text>
      <G data-name="001-music">
        <G data-name="Group 2059">
          <Path
            data-name="Path 68417"
            d="M11.3 4.2v12.9a4.959 4.959 0 00-2.52-.64C6.661 16.46 5 17.567 5 18.98s1.66 2.52 3.78 2.52 3.78-1.107 3.78-2.52V8.888l10.082-3.36v7.792a4.959 4.959 0 00-2.52-.64c-2.119 0-3.78 1.107-3.78 2.52s1.661 2.52 3.78 2.52 3.78-1.107 3.78-2.52V0z"
            fill="#63666e"
          />
        </G>
      </G>
    </Svg>
  );
};
