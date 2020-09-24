import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Reducers} from "./reducers";
import {ALL_SAGA} from "./saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware()

export const STORE = createStore(Reducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(ALL_SAGA)
