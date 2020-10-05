import React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg"
import {SvgProps} from './props';

export const IconPlayColorFul = (props: SvgProps) => {
  return (
    <Svg
      style={props.style}
      width={props.widthIcon}
      height={props.heightIcon}
      viewBox="0 0 22 22" {...props}>
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
      <G data-name="Group 2582">
        <G data-name="Group 2048">
          <Path
            data-name="Exclusion 1"
            d="M11 22A11 11 0 013.222 3.222a11 11 0 1115.556 15.556A10.929 10.929 0 0111 22zm.027-20.87a9.9 9.9 0 109.9 9.9 9.907 9.907 0 00-9.9-9.9z"
            fill="url(#prefix__a)"
          />
        </G>
        <G data-name="Group 2049">
          <Path
            data-name="Polygon 4"
            d="M4.152 1.357a1 1 0 011.7 0l3.2 5.113A1 1 0 018.2 8H1.8a1 1 0 01-.844-1.53z"
            transform="rotate(90 5 11)"
            fill="url(#prefix__a)"
          />
        </G>
      </G>
    </Svg>
  );
};
