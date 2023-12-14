import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import { getSessionId } from '../Utils/sessionUtils';

const paymentStateFilter = createFilter('paymentState', ['customerInfo']);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartState', 'paymentState'],
  transforms: [paymentStateFilter],
};

export default (rootReducer) => {
  const sessionId = getSessionId();
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  return persistedReducer;
};

