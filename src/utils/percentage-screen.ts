import {Screen} from "react-native-screens";
import {Dimensions} from "react-native";

export class PercentageScreen {
  static getWidth(value: number) {
    return Dimensions.get("screen").width * (value / 100) + "px"
  }

  static getHeight(value: number) {
    return Dimensions.get("screen").height * (value / 100) + "px"
  }
}
