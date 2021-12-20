import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Notify from './Toast';

const ErrorHandler = () => {
  const dispatch = useDispatch();
  const {err, suc} = useSelector(state => state.auth);
  useEffect(() => {
    console.log(err, suc);
    if (err !== undefined) Notify(err);
    if (suc !== undefined) Notify(suc);
    dispatch({type: 'CLEAR_AUTH_ERRSUC'});
  }, [err, suc]);
  return <View></View>;
};

export default ErrorHandler;
