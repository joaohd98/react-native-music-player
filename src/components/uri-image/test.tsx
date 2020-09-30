import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {UriImageStyles} from "./styles";
import {mount, ReactWrapper} from "enzyme";
import {UriImageProps} from "./props";
import {UriImageState} from "./state";
import {UriImage} from "./index";
import {TryAgainView} from "../try-again";

const {
  Container,
  Image,
  ActivityIndicator,
  ErrorView,
  ErrorTouchable,
} = UriImageStyles

describe('UriImage', () => {
  let uriImage: ReactWrapper<UriImageProps, UriImageState>
  const initialProps: UriImageProps = {
    uri: "abc.com"
  }

  beforeEach(() => {
    uriImage = mount(<UriImage {...initialProps} />)
  })

  it('renders correctly', () => {
    renderer.create(<UriImage  {...initialProps} />);
  });

  it("initial show loading", () => {
    const image = uriImage.find(Image)
    const activityIndicator = uriImage.find(ActivityIndicator)
    const errorView = uriImage.find(ErrorView)

    expect(image.prop("isLoadingOrError")).toBe(true)
    expect(activityIndicator.prop("isLoading")).toBe(true)
    expect(errorView.prop("hasError")).toBe(false)
  })

  it("show error", () => {
    uriImage.setState({
      isLoading: false,
      hasError: true
    })

    const image = uriImage.find(Image)
    const activityIndicator = uriImage.find(ActivityIndicator)
    const errorView = uriImage.find(ErrorView)

    expect(image.prop("isLoadingOrError")).toBe(true)
    expect(activityIndicator.prop("isLoading")).toBe(false)
    expect(errorView.prop("hasError")).toBe(true)
  })

  it("show success", () => {
    uriImage.setState({
      isLoading: false,
      hasError: false,
    })

    const image = uriImage.find(Image)
    const activityIndicator = uriImage.find(ActivityIndicator)
    const errorView = uriImage.find(ErrorView)

    expect(image.prop("source").uri).toBe(initialProps.uri)
    expect(image.prop("isLoadingOrError")).toBe(false)
    expect(activityIndicator.prop("isLoading")).toBe(false)
    expect(errorView.prop("hasError")).toBe(false)
  })

  it("load image flow", () => {
    const image = uriImage.find(Image)

    const checkState = (isLoading: boolean, hasError: boolean) => {
      expect(uriImage.state("isLoading")).toBe(isLoading)
      expect(uriImage.state("hasError")).toBe(hasError)
    }

    image.prop("onLoadStart")()
    checkState(true, false)

    image.prop("onLoadEnd")()
    checkState(false, false)
  })


  it("error image flow", () => {
    const image = uriImage.find(Image)
    const touchable = uriImage.find(ErrorTouchable)

    const checkState = (isLoading: boolean, hasError: boolean) => {
      expect(uriImage.state("isLoading")).toBe(isLoading)
      expect(uriImage.state("hasError")).toBe(hasError)
    }

    image.prop("onError")()
    checkState(false, true)

    touchable.simulate("click")
    expect(uriImage.state("uri")).not.toBe(initialProps.uri)
  })
})
