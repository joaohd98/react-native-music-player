import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {LoginScreen} from "../index";
import {mount, ReactWrapper} from "enzyme";
import {LoginScreenState} from "../state";

describe("LoginScreen", () => {
  let login: ReactWrapper<{}, LoginScreenState>;

  beforeEach(() => {
    login = mount(<LoginScreen />);
  });

  it('renders correctly', () => {
    renderer.create(<LoginScreen />);
  });


})

