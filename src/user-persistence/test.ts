import {ActionsType, ReducersProps} from "../redux/reducers";
import {storeFactory} from "../utils/redux-test";
import {CombinedState, Store} from "redux";
import {UserInitialState} from "./reducer";
import {UserProps} from "./props";
import {UserActionConst} from "./action-type";

describe("UserPersistence", () => {
  let store: Store<CombinedState<ReducersProps>, ActionsType>;

  beforeEach(() => {
    store = storeFactory();
  });

  it('should be initial state', () => {
    const state = store.getState().userProps

    expect(state).toStrictEqual(UserInitialState)
  });

  it("call 'saveUser' from props", () => {
    const token = "token"
    const refreshToken = "refreshToken"

    const exceptedState: UserProps = {
      ...UserInitialState,
      isLogged: true,
      token: token,
      refreshToken: refreshToken
    };

    store.dispatch({
      type: UserActionConst.saveUser,
      authorize: {
        accessToken: token,
        accessTokenExpirationDate: "",
        authorizationCode: "",
        idToken: "",
        refreshToken: refreshToken,
        scopes: [],
        tokenType: ""
      }
    })

    const state = store.getState().userProps
    expect(state).toStrictEqual(exceptedState)
  });

  it("call 'refreshTokens' from props", () => {
    const token = "token"
    const refreshToken = "refreshToken"

    const exceptedState: UserProps = {
      ...UserInitialState,
      token: token,
      refreshToken: refreshToken
    };

    store.dispatch({
      type: UserActionConst.refreshTokens,
      token,
      refreshToken,
    })

    const state = store.getState().userProps
    expect(state).toStrictEqual(exceptedState)
  });
})
