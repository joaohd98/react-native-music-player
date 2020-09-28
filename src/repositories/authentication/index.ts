import {AuthConfiguration, authorize, AuthorizeResult, refresh} from 'react-native-app-auth';
import {KEYS} from "../../../keys";

export class AuthenticationRepository  {
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
    authorize(this.spotifyAuthConfig).then(onSuccess).catch(onFailed)
  }

  async refreshLogin(refreshToken: string) {
    return await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
  }
}
