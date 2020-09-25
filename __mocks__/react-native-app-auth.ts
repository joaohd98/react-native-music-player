jest.mock("react-native-app-auth", () => {
  const auth = jest.requireActual("react-native-app-auth");

  return {
    ...auth,
    authorize: () => {
      return new Promise((resolve) => resolve());
    }
  }
})
