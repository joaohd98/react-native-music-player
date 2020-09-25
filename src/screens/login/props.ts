import {AuthorizeResult} from "react-native-app-auth";

export interface LoginScreenProps {
  saveUser: (res: AuthorizeResult) => void
}
