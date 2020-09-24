import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text,
  TSpan,
  G,
  Rect,
} from "react-native-svg"
import {IconProps} from './props';

export const IconTabHomeSelected = (props: IconProps) => {
  return (
    <Svg width={props.widthIcon} height={props.heightIcon} viewBox="0 0 30 39">
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
        transform="translate(15 36)"
        fill="#d9519d"
        fontSize={10}
        fontFamily="CircularStd-Book, Circular Std"
        letterSpacing=".04em"
      >
        <TSpan x={-14.145} y={0}>
          {"Home"}
        </TSpan>
      </Text>
      <G
        data-name="Group 2060"
        transform="translate(-737 -918)"
        fill="url(#prefix__a)"
      >
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
    </Svg>
  );
};
