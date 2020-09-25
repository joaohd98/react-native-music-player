import {AuthConfiguration, authorize, AuthorizeResult, refresh} from 'react-native-app-auth';
import {KEYS} from "../../../keys";
import {RepositoryModel} from "../repository-model";

export class AuthenticationRepository extends RepositoryModel {
  private spotifyAuthConfig: AuthConfiguration = {
    clientId: KEYS.clientID,
    clientSecret: KEYS.clientSecret,
    redirectUrl: "com.joao.reactnative.musicplayer:/oauthredirect",
    scopes: [
      'playlist-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-library-read',
      'user-library-modify',
      'user-top-read',
    ],
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
  }

  makeLogin(onSuccess: (res: AuthorizeResult) => void, onFailed: () => void) {
    this.callService<AuthorizeResult>(authorize(this.spotifyAuthConfig), onSuccess, onFailed, {
      accessToken: "",
      accessTokenExpirationDate: "",
      authorizationCode: "",
      idToken: "",
      refreshToken: "",
      scopes: [],
      tokenType: ""
    })
  }

  async refreshLogin(refreshToken: string, onSuccess: (res: AuthorizeResult) => void, onFailed: () => void) {
    return await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    }).then();
  }
}
