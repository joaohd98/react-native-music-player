import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './props';

export const IconSearch = (props: IconProps) => {
  return (
    <Svg width={props.widthIcon} height={props.heightIcon} viewBox="0 0 18 18">
      <Path
        fill="#fff"
        d="M17.559 15.432l-3.91-3.91c-.021-.021-.045-.035-.067-.055a7.4 7.4 0 10-2.115 2.115c.019.022.034.046.055.067l3.91 3.91a1.5 1.5 0 102.127-2.127zM7.4 12.235A4.835 4.835 0 1112.235 7.4 4.835 4.835 0 017.4 12.235z"
        opacity={0.35}
      />
    </Svg>
  );
};
