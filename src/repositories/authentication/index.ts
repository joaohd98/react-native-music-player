import {AuthConfiguration, authorize, AuthorizeResult, refresh} from 'react-native-app-auth';
import {KEYS} from "../../../keys";

export class AuthenticationHandler {
  private static spotifyAuthConfig: AuthConfiguration = {
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

  static makeLogin(onSuccess: (res: AuthorizeResult) => void, onFailed: () => void) {
    authorize(AuthenticationHandler.spotifyAuthConfig).then(onSuccess).catch(onFailed)
  }

  private static async refreshLogin(refreshToken: string) {
    return await refresh(AuthenticationHandler.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
  }

}
