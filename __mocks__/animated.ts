import "react-native"

jest.mock("react-native/Libraries/Animated/src/Animated", () => {
  const animated = jest.requireActual("react-native/Libraries/Animated/src/Animated");

  const callFun = (cb: () => void) => {
    if (typeof cb === "function") {
      cb()
    }
  }

  return {
    ...animated,
    timing: () => ({
      start: (cb: () => void) => callFun(cb)
    }),
    parallel: () => ({
      start: (cb: () => void) => callFun(cb)
    })
  }
})
