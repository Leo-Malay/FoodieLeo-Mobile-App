import React, {Component, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Helper Component
import {ScreenHeader} from '../components/Header';
import {IconButton, Button} from '../components/Button';
import CartItem from '../components/CartItem';
// Style
import style from '../Style/style';
import {Black, Yellow} from '../Style/color';
// Request
import {Cart as CartReq} from '../redux/Actions/Cart';
import {useDispatch, useSelector} from 'react-redux';
import {CartErrorHandler} from '../components/ErrorHandler';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);
  useEffect(() => {
    if (cart === undefined) dispatch(CartReq());
  }, [cart, dispatch, CartReq]);
  console.log(cart);
  return (
    <View style={style.Container}>
      <ScreenHeader navigation={navigation} props={{name: 'Cart'}} />
      <ScrollView>
        {(cart === undefined || cart === []) && (
          <View style={{alignItems: 'center'}}>
            <IconButton
              props={{
                name: 'shopping-bag',
                size: 100,
                color: Black,
                onPress: () => {},
              }}
            />
            <Text
              style={[
                style.Center,
                style.Text,
                style.Subtitle,
                {paddingVertical: 10},
              ]}>
              Cart Empty! Grab something Quickly ;)
            </Text>
          </View>
        )}

        {(cart !== undefined || cart !== []) && (
          <View>
            {cart.map((ele, z) => {
              return <CartItem key={z} props={ele} />;
            })}
          </View>
        )}
        <View style={style.Center}>
          <Button
            props={{
              text: 'Proceed to CheckOut',
              width: 300,
              bgcolor: Yellow,
              color: Black,
            }}
          />
        </View>
      </ScrollView>
      <CartErrorHandler />
    </View>
  );
};

export default Cart;
