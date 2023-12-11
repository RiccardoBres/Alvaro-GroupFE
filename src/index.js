import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import eventState from './States/EventState';
import merchState from './States/MerchState';
import cartState from './States/CarrelState';
import paymentState from './States/PaymentState';
import customerState from './States/CustomerState';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createPersistor from './States/persistConfig';

const rootReducer = combineReducers({
 eventState: eventState,
 merchState: merchState,
 cartState: cartState,
 paymentState: paymentState,
 customerState : customerState,
});

const customizedMiddleware = getDefaultMiddleware({
 serializableCheck: false,
});

const store = configureStore({
 reducer: createPersistor(rootReducer),
 middleware: customizedMiddleware,
});

const persistor = persistStore(store);

const root = createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
       <App />
     </PersistGate>
   </Provider>
 </React.StrictMode>
);
