import {Action} from "redux";

export enum HomeScreenActionConst {
  todo
}

interface Todo extends Action<HomeScreenActionConst.todo> {}

export type HomeScreenActionType =
  | Todo
