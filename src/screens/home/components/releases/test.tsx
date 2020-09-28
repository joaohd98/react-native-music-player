import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {HomeReleasesView} from "./index";
import {RepositoryStatus} from "../../../../repositories/repository-status";

describe('HomeReleasesView', () => {
  // let recommended: ReactWrapper<HomereleasesProps, HomereleasesState>;
  //
  // beforeEach(() => {
  //   recommended = mount(<HomeNewReleasesView status={RepositoryStatus.NONE} />)
  // })

  it('renders correctly', () => {
    renderer.create(<HomeReleasesView status={RepositoryStatus.NONE} releases={[]} />);
  });

})
