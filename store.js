import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AuthReducer from './src/redux/Reducers/Auth';
import CartReducer from './src/redux/Reducers/Cart';
import MenuReducer from './src/redux/Reducers/Menu';

const Store = configureStore({
  reducer: combineReducers({
    auth: AuthReducer,
    cart: CartReducer,
    menu: MenuReducer,
  }),
});

export default Store;
