import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventState from './States/EventState';
import merchState from './States/MerchState';
import cartState from './States/CarrelState';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createPersistor from '../src/States/persistConfig'; 

const reducer = combineReducers({
  eventState: eventState,
  merchState: merchState,
  cartState: cartState,
});

const store = configureStore({
  reducer: createPersistor(reducer), 
});

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
