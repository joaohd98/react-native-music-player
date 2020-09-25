import {AuthConfiguration, authorize, refresh} from 'react-native-app-auth';
import {KEYS} from "../../../keys";

export class AuthenticationHandler {
  spotifyAuthConfig: AuthConfiguration;

  static instance = new AuthenticationHandler()

  constructor() {
    this.spotifyAuthConfig = {
      clientId: KEYS.clientID,
      clientSecret: KEYS.clientSecret,
      redirectUrl: 'com.your.app.name://oauthredirect',
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
    };
  }

  async onLogin() {
    try {
      return await authorize(this.spotifyAuthConfig);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async refreshLogin(refreshToken: string) {
    return await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
  }

}
