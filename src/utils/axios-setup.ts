import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {STORE} from "../redux/store";
import {AuthenticationRepository} from "../repositories/authentication";
import {KEYS} from "../../keys";
import {Base64} from "./base64";

const configRequest = (config: AxiosRequestConfig, token: string = STORE.getState().userProps.token) => {
  let authorization: string

  if(config.url?.includes("token")) {
    const base64 = Base64.btoa(KEYS.clientID + ":" + KEYS.clientSecret)
    authorization = "Basic " + base64
  }
  else {
    authorization = "Bearer " + token
  }

  config.headers = {
    "Authorization": authorization,
    "Content-Type": "application/x-www-form-urlencoded"
  };

  config.data = new URLSearchParams(config.data);
}

const configRefreshToken = async (config: AxiosResponse) => {
  const refreshToken = STORE.getState().userProps.refreshToken
  const repository = new AuthenticationRepository()
  const result = await repository.refreshLogin(refreshToken)

  STORE.getState().userProps.token = result.data.access_token!
  STORE.getState().userProps.refreshToken = result.data.refresh_token

  return result.data.access_token
}

export const setupAxios = () => {
  axios.interceptors.request.use((config) => {
    configRequest(config)

    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  axios.interceptors.response.use((config) => {
    return config;
  }, async (error) => {
    const code = error.response.status

    if(code == 401) {

      try {
        const config = error.config

        const token = await configRefreshToken(config)
        configRequest(config, token)

        return axios.request(config);
      } catch (error) {
        return Promise.reject(error)
      }
    }
    else {
      return Promise.reject(error);
    }
  });
}

