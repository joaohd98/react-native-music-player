import {AuthConfiguration, authorize, AuthorizeResult, refresh} from 'react-native-app-auth';
import axios from "axios"
import {KEYS} from "../../../keys";

const redirectUri = "com.joao.reactnative.musicplayer:/oauthredirect"

export class AuthenticationRepository  {
  private spotifyAuthConfig: AuthConfiguration = {
    clientId: KEYS.clientID,
    clientSecret: KEYS.clientSecret,
    redirectUrl: redirectUri,
    scopes: [
      'user-read-recently-played',
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
    return await axios.post<{access_token: string, refresh_token: string}>("https://accounts.spotify.com/api/token", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    })
  }
}
