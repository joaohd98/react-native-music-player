import "react-native"

jest.mock("react-native/Libraries/Animated/src/Animated", () => {
  const animated = jest.requireActual("react-native/Libraries/Animated/src/Animated");

  return {
    ...animated,
    timing: () => ({
      start: (cb: () => void) => cb()
    }),
    parallel: () => ({
      start: (cb: () => void) => cb()
    })
  }
})
