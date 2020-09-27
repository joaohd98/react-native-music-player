import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {HomeRecommendedView} from "./index";
import {mount, ReactWrapper} from "enzyme";
import {HomeRecommendedProps} from "./props";
import {HomeRecommendedState} from "./state";
import {RepositoryStatus} from "../../../../repositories/repository-status";

describe('HomeRecommendedView', () => {
  // let recommended: ReactWrapper<HomeRecommendedProps, HomeRecommendedState>;
  //
  // beforeEach(() => {
  //   recommended = mount(<HomeRecommendedView status={RepositoryStatus.NONE} />)
  // })

  it('renders correctly', () => {
    renderer.create(<HomeRecommendedView status={RepositoryStatus.NONE} />);
  });

})
