import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import storage from 'redux-persist/lib/storage'
import {persistReducer } from 'redux-persist'

import quizReducer from "./reducer";

const reducers =persistReducer({storage: storage,key:'a27' }, combineReducers({
    quizReducer
}));

let middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, thunk];
} else {
  middleware = [...middleware, thunk];
}

export const store = createStore(reducers, {}, applyMiddleware(...middleware));