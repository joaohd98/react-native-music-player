import {AuthConfiguration, authorize, refresh} from 'react-native-app-auth';
import {KEYS} from "../../../keys";

export class AuthenticationHandler {
  spotifyAuthConfig: AuthConfiguration;

  constructor() {
    this.spotifyAuthConfig = {
      clientId: KEYS.clientID,
      clientSecret: KEYS.clientSecret,
      redirectUrl: 'com.joao.reactnative.MusicPlayer://oauthredirect',
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

  async makeLogin() {
    try {
      const result = await authorize(this.spotifyAuthConfig);
      console.log(JSON.stringify(result));
      return result
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async refreshLogin(refreshToken: string) {
    console.log(JSON.stringify(refreshToken));

    return await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
  }

}
