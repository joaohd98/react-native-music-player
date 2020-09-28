import axios from "axios";
import {STORE} from "../redux/store";
import {AuthenticationRepository} from "../repositories/authentication";
import {KEYS} from "../../keys";
import {Base64} from "./base64";

export const setupAxios = () => {
  axios.interceptors.request.use((config) => {
    let authorization: string

    if(config.url?.includes("token")) {
      authorization = ""
    }
    else {
      const token = STORE.getState().userProps.token
      authorization = "Bearer " + token
    }

    config.headers = {
      "Authorization": authorization,
      "Content-Type": "application/x-www-form-urlencoded"
    };

    config.data = new URLSearchParams(config.data);

    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  axios.interceptors.response.use((config) => {
    return config;
  }, async (error) => {
    const code = error.response.status
    const refreshToken = STORE.getState().userProps.refreshToken

    if(code == 401) {
      try {
        const repository = new AuthenticationRepository()
        const result = await repository.refreshLogin(refreshToken)

        STORE.getState().userProps.token = result.data.access_token!
        STORE.getState().userProps.refreshToken = result.data.refresh_token!

        return axios.request(error.config);

      } catch(error) {
        console.log(error)

        return Promise.reject(error);
      }
    }
    else {
      return Promise.reject(error);
    }
  });
}
