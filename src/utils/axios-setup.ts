import axios from "axios";
import {STORE} from "../redux/store";
import {AuthenticationRepository} from "../repositories/authentication";

export const setupAxios = () => {
  axios.interceptors.request.use((config) => {
    const token = STORE.getState().userProps.token
    config.headers.Authorization = `Bearer ${token}`;

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

        STORE.getState().userProps.token = result.accessToken!
        STORE.getState().userProps.refreshToken = result.refreshToken!

        return axios.request(error.config);

      } catch(error) {

        return Promise.reject(error);
      }
    }
    else {
      return Promise.reject(error);
    }
  });
}
