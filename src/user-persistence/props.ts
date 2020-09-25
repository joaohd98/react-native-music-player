import {AuthorizeResult} from "react-native-app-auth";

export interface UserPropsActions {
  saveUser: (authorize: AuthorizeResult) => void;
}

export interface UserProps extends UserPropsActions {
  isLogged: boolean;
  token: string;
  refreshToken: string;
}
