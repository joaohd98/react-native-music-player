import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgProps} from './props';

export const IconRetry = (props: SvgProps) => {
  return (
    <Svg width={props.widthIcon} height={props.heightIcon} viewBox="0 0 14.365 7.812">
      <Path
        data-name="Icon Retry"
        d="M11.111 1.3H2.223l.191-.191a.651.651 0 00-.921-.921l-1.3 1.3a.651.651 0 000 .921l1.3 1.3a.651.651 0 00.921-.921l-.191-.191h8.888a1.953 1.953 0 010 3.906H8.464a.651.651 0 000 1.3h2.647a3.255 3.255 0 100-6.51z"
        fill="#e2e2e2"
      />
    </Svg>
  );
};
