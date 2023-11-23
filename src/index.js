import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import eventState from './Components/States/EventState';
import merchState from './Components/States/MerchState';
import cartState from './Components/States/CarrelState';




const reducer = combineReducers({
   eventState: eventState,
   merchState: merchState,
   cartState: cartState,
 });

 const store = configureStore({
  reducer
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
  </React.StrictMode>
);









