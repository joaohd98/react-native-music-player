import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {Layout} from '../layout';

it('renders correctly', () => {
  renderer.create(<Layout />);
});
