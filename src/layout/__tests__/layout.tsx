import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {Layout} from '../index';

it('renders correctly', () => {
  renderer.create(<Layout />);
});
