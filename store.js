import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AuthReducer from './src/redux/Reducers/Auth';
import CartReducer from './src/redux/Reducers/Cart';

const Store = configureStore({
  reducer: combineReducers({
    Auth: AuthReducer,
    Cart: CartReducer,
  }),
});

export default Store;
