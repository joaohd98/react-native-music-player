import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {mount, ReactWrapper} from "enzyme";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {HomePlaylistState} from "./state";
import {HomePlaylistProps} from "./props";
import {FeaturedPlaylistResponse} from "../../../../repositories/playlist/response";
import {HomePlaylistView} from "./index";
import {HomePlaylistStyle} from "./styles";

const {
  ContainerView,
  TitleText,
  ViewAllTouchable,
  ViewAllText,
  ScrollHorizontal,
  PlaylistCard,
  PlaylistCardImage,
  PlaylistCardNameText,
  ActivityIndicator,
  TryAgainView
} = HomePlaylistStyle

describe("HomePlaylistView", () => {
  let playlistView: ReactWrapper<HomePlaylistProps, HomePlaylistState>

  beforeEach(() => {
    playlistView = mount(<HomePlaylistView playlists={[]} status={RepositoryStatus.NONE} onTryAgain={() => {}} />)
  })

  it('renders correctly', () => {
    renderer.create(<HomePlaylistView playlists={[]} status={RepositoryStatus.NONE} onTryAgain={() => {}} />);
  });

  it('should render container', () => {
    const container = playlistView.find(ContainerView)
    const title = playlistView.find(TitleText)
    const viewAllTouchable = playlistView.find(ViewAllTouchable)
    const viewAllText = playlistView.find(ViewAllText)

    expect(container).toHaveLength(1)
    expect(title).toHaveLength(1)
    expect(viewAllTouchable).toHaveLength(1)
    expect(viewAllText).toHaveLength(1)
  });

  describe("onLoading", () => {
    beforeEach(() => {
      playlistView.setProps({
        status: RepositoryStatus.LOADING
      })
    })

    it('should show activity indicator', () => {
      const activityIndicator = playlistView.find(ActivityIndicator)

      expect(activityIndicator).toHaveLength(1)
    });
  })

  describe("onFailed", () => {
    let spy: jest.Mock

    beforeEach(() => {
      spy = jest.fn()

      playlistView.setProps({
        status: RepositoryStatus.FAILED,
        onTryAgain: spy
      })
    })

    it('should show try again view', () => {
      const tryAgain = playlistView.find(TryAgainView)
      tryAgain.prop("onPress")()

      expect(tryAgain).toHaveLength(1)
      expect(spy).toHaveBeenCalled()
    });
  })

  describe("onSuccess", () => {
    let playlistMock: FeaturedPlaylistResponse[]

    beforeEach(() => {
      playlistMock = []

      for(let i = 0; i < 10; i++) {
        playlistMock.push({
          name: "name" + 1,
          imageUri: "imageUri" + i,
        })
      }

      playlistView.setProps({
        playlists: playlistMock,
        status: RepositoryStatus.SUCCESS
      })
    })

    it('should render scroll and cards', () => {
      const scrollHorizontal = playlistView.find(ScrollHorizontal)
      const cards = playlistView.find(PlaylistCard)

      expect(scrollHorizontal).toHaveLength(1)
      expect(cards).toHaveLength(playlistMock.length)
    });

    it('should render card with props of playlist', () => {
      const size = playlistMock.length

      for(let i = 0; i < size; i++) {
        const card = playlistView.find(PlaylistCard).at(i)
        const uri = card.find(PlaylistCardImage).prop("uri")
        const text = card.find(PlaylistCardNameText).text()

        expect(uri).toBe(playlistMock[i].imageUri)
        expect(text).toBe(playlistMock[i].name)
      }
    });
  })
})
