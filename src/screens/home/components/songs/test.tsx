import 'react-native';
import React from 'react';
import {mount, ReactWrapper} from "enzyme";
import {HomeSongsProps} from "./props";
import {HomeSongsView} from "./index";
import renderer from "react-test-renderer";
import {RepositoryStatus} from "../../../../repositories/repository-status";
import {HomeSongsStyles} from "./styles";
import {TryAgainView} from "../../../../components/try-again";
import {RecentsSongResponse} from "../../../../repositories/songs/recents-song-response";

const {
  ContainerView,
  TitleText,
  TopView,
  ViewAllTouchable,
  ViewAllText,
  ActivityIndicator,
  RowSongContainerView,
  RowSongView,
  RowSongArtistNameText,
  RowSongDurationText,
  RowSongNameText,
  RowSongPlayIcon,
  RowSongsTextView
} = HomeSongsStyles


describe("HomeSongsView", () => {
  let homeSongsView: ReactWrapper<HomeSongsProps>
  const initialState: HomeSongsProps = {
    songs: [],
    status: RepositoryStatus.NONE,
    onTryAgain: () => {}
  }
  beforeEach(() => {
    homeSongsView = mount(<HomeSongsView {...initialState} />)
  })

  it('renders correctly', () => {
    renderer.create(<HomeSongsView {...initialState} />);
  });

  it('should render container', () => {
    const containerView = homeSongsView.find(ContainerView)
    const titleText = homeSongsView.find(TitleText)
    const topView = homeSongsView.find(TopView)
    const viewAllTouchable = homeSongsView.find(ViewAllTouchable)
    const viewAllText = homeSongsView.find(ViewAllText)

    expect(containerView).toHaveLength(1)
    expect(topView).toHaveLength(1)
    expect(titleText).toHaveLength(1)
    expect(viewAllTouchable).toHaveLength(1)
    expect(viewAllText).toHaveLength(1)
  })

  describe("onError", () => {
    beforeEach(() => {
      homeSongsView.setProps({
        status: RepositoryStatus.FAILED
      })
    })

    it("should show 'tryAgainView' ", () => {
      const spy = jest.fn()

      homeSongsView.setProps({
        onTryAgain: spy
      })

      const tryAgainView = homeSongsView.find(TryAgainView)
      tryAgainView.prop("onPress")()

      expect(tryAgainView).toHaveLength(1)
      expect(spy).toHaveBeenCalled()
    });
  })

  describe("onLoading", () => {
    beforeEach(() => {
      homeSongsView.setProps({
        status: RepositoryStatus.LOADING
      })
    })

    it("should show 'ActivityIndicator' ", () => {
      const activityIndicator = homeSongsView.find(ActivityIndicator)
      expect(activityIndicator).toHaveLength(1)
    });
  })

  describe("onSuccess", () => {
    let songs: RecentsSongResponse[]

    beforeEach(() => {
      songs = []
      for(let i = 0 ; i < 10; i++) {
        songs.push({
          name: "name" + i,
          artistName: "artistName" +  i,
          previewURL: "previewURL" + i,
          duration: "duration" + 1
        })
      }

      homeSongsView.setProps({
        status: RepositoryStatus.SUCCESS,
        songs
      })
    })

    it('"rowSongs" length should be equal to "songs" length ', () => {
      const rowSongContainerView = homeSongsView.find(RowSongContainerView)
      const rowSongsView = homeSongsView.find(RowSongView)

      expect(rowSongContainerView).toHaveLength(1)
      expect(rowSongsView).toHaveLength(songs.length)
    });

    it('should render row songs correctly ', () => {
      const rowSongsView = homeSongsView.find(RowSongView)
      const size = rowSongsView.length

      for(let i = 0; i < size; i++) {
        const rowSongNameText  = rowSongsView.find(RowSongNameText).at(i)
        const rowSongArtistNameText  = rowSongsView.find(RowSongArtistNameText).at(i)
        const rowSongDurationText  = rowSongsView.find(RowSongDurationText).at(i)

        const {name, artistName, duration} = songs[i]

        expect(rowSongNameText.text()).toBe(name)
        expect(rowSongArtistNameText.text()).toBe(artistName)
        expect(rowSongDurationText.text()).toBe(duration)
      }
    });
  })

})
