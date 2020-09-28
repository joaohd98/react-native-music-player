import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {mount, ReactWrapper} from "enzyme";
import {HomeScreenProps} from "./props";
import {HomeScreen} from "./index";
import {HomeScreenInitialState} from "./redux/reducer";

describe("HomeScreen", () => {
  let home: ReactWrapper<HomeScreenProps, {}>;

  beforeEach(() => {
    home = mount(<HomeScreen {...HomeScreenInitialState} />);
  });

  it('renders correctly', () => {
    renderer.create(<HomeScreen {...HomeScreenInitialState} />);
  });
})
