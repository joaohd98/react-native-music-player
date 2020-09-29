import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {HomeReleasesView} from "./index";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {mount, ReactWrapper} from "enzyme";
import {HomeReleasesProps} from "./props";
import {HomeReleasesState} from "./state";
import {ReleasesResponse} from "../../../../repositories/releases/response";
import {HomeReleasesStyles} from "./styles";
import {HomeScreen} from "../../index";
import {TryAgainView} from "../../../../components/try-again";

const {
  ContainerView,
  ReleaseText,
  ScrollHorizontal,
  CardView,
  CoverImage,
  ReleaseNameText,
  ArtistNameText,
  ActivityIndicator
} = HomeReleasesStyles

describe('HomeReleasesView', () => {
  let releaseView: ReactWrapper<HomeReleasesProps, HomeReleasesState>;
  let releasesMock: ReleasesResponse[]

  beforeEach(() => {
    releaseView = mount(<HomeReleasesView status={RepositoryStatus.NONE} releases={[]} onTryAgain={() => {}}/>)
    releasesMock = []

    for(let i = 0; i < 10; i++) {
      releasesMock.push({
        name: "name" + i,
        artistName: "artistName" + i,
        imageUri: "imageUri" + i,
      })
    }
  })

  it('renders correctly', () => {
    renderer.create(<HomeReleasesView status={RepositoryStatus.NONE} releases={[]} onTryAgain={() => {}}/>);
  });

  describe("onSuccess", () => {
    beforeEach(() => {
      releaseView.setProps({
        status: RepositoryStatus.SUCCESS
      })
    })

    it('renders all views', () => {
      const activityIndicator = releaseView.find(ActivityIndicator)
      const scrollHorizontal = releaseView.find(ScrollHorizontal)

      expect(activityIndicator).toHaveLength(0)
      expect(scrollHorizontal).toHaveLength(1)
    });

    it('renders cards correctly', () => {
      releaseView.setProps({
        releases: releasesMock
      })
      releaseView.update()

      const cards = releaseView.find(CardView)
      expect(cards).toHaveLength(releasesMock.length)

      const size = releasesMock.length

      for(let i = 0; i < size; i++) {
        const mock = releasesMock[i]
        const card = cards.at(i)

        const coverImage = card.find(CoverImage)
        const releaseNameText = card.find(ReleaseNameText)
        const artistNameText = card.find(ArtistNameText)

        expect(coverImage.prop("source").uri).toBe(mock.imageUri)
        expect(artistNameText.text()).toBe(mock.artistName)
        expect(releaseNameText.text()).toBe(mock.name)
      }
    });
  })

  describe("onLoading", () => {
    beforeEach(() => {
      releaseView.setProps({
        status: RepositoryStatus.LOADING
      })
    })

    it("show activity indicator", () => {
      const activityIndicator = releaseView.find(ActivityIndicator)
      const scrollHorizontal = releaseView.find(ScrollHorizontal)

      expect(scrollHorizontal).toHaveLength(0)
      expect(activityIndicator).toHaveLength(1)
    })
  })

  describe("onFailed", () => {
    beforeEach(() => {
      releaseView.setProps({
        status: RepositoryStatus.FAILED
      })
    })

    it("should show 'tryAgainView'", () => {
      const tryAgain = releaseView.find(TryAgainView)

      expect(tryAgain).toHaveLength(1)
    })

    it("check 'onTryAgain' is on 'tryAgainView'", () => {
      const onTryAgain = () => {
        return "abc123"
      }

      releaseView.setProps({
        onTryAgain
      })

      const tryAgainView = releaseView.find(TryAgainView)

      expect(tryAgainView.prop("onPress")()).toStrictEqual(onTryAgain())
    })
  })

})
