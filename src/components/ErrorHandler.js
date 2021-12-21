import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Notify from './Toast';

const AuthErrorHandler = () => {
  const dispatch = useDispatch();
  const {err, suc} = useSelector(state => state.auth);
  useEffect(() => {
    if (err !== undefined) Notify(err);
    if (suc !== undefined) Notify(suc);
    dispatch({type: 'CLEAR_AUTH_ERRSUC'});
  }, [err, suc]);
  return <View></View>;
};
const MenuErrorHandler = () => {
  const dispatch = useDispatch();
  const {err, suc} = useSelector(state => state.auth);
  useEffect(() => {
    if (err !== undefined) Notify(err);
    if (suc !== undefined) Notify(suc);
    dispatch({type: 'CLEAR_MENU_ERRSUC'});
  }, [err, suc]);
  return <View></View>;
};
const CartErrorHandler = () => {
  const dispatch = useDispatch();
  const {err, suc} = useSelector(state => state.cart);
  useEffect(() => {
    if (err !== undefined) Notify(err);
    if (suc !== undefined) Notify(suc);
    dispatch({type: 'CLEAR_CART_ERRSUC'});
  }, [err, suc]);
  return <View></View>;
};

export {AuthErrorHandler, MenuErrorHandler, CartErrorHandler};
