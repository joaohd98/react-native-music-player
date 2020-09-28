import {createStore, applyMiddleware, CombinedState, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {ActionsType, Reducers, ReducersProps} from "./reducers";
import {ALL_SAGA} from "./saga";
import logger from "redux-logger";
import { persistStore } from 'redux-persist'
import * as Redux from "redux";

const sagaMiddleware = createSagaMiddleware()

const middlewares: Redux.Middleware[] = [
  sagaMiddleware
]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}


export const STORE = createStore(Reducers, applyMiddleware(...middlewares))
// @ts-ignore
export const PERSISTER_STORE = persistStore(STORE)

sagaMiddleware.run(ALL_SAGA)
