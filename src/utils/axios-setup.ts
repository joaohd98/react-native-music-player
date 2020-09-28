import axios from "axios";
import {STORE} from "../redux/store";

axios.interceptors.request.use((config) => {
  const token = STORE.getState().userProps.token
  config.headers.Authorization = `Bearer ${token}`;

  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});
