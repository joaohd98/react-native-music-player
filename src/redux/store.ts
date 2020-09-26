import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Reducers} from "./reducers";
import {ALL_SAGA} from "./saga";
import logger from "redux-logger";
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

export const STORE = createStore(Reducers, applyMiddleware(sagaMiddleware, logger))
export const PERSISTER_STORE = persistStore(STORE)

sagaMiddleware.run(ALL_SAGA)
