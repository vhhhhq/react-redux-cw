import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


import { Provider } from 'react-redux';
import { store } from './store/store.js'

import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import 'antd/dist/antd.css';
const persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  </BrowserRouter>
);

