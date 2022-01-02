import React, {useEffect} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Helper Component
import {ScreenHeader} from '../components/Header';
import {Button} from '../components/Button';
import CartItem from '../components/CartItem';
import {CartErrorHandler} from '../components/ErrorHandler';
// Style
import General from '../Style/General';
import style from '../Style/style';
import {Black, Yellow} from '../Style/color';
// Request
import {Cart as CartReq} from '../redux/Actions/Cart';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const {cart, isLoading} = useSelector(state => state.cart);
  useEffect(() => {
    if (cart === undefined) dispatch(CartReq());
  }, [cart, dispatch, CartReq]);
  var total = 0;
  console.log(cart);
  return (
    <View style={style.Container}>
      <ScreenHeader navigation={navigation} props={{name: 'Cart'}} />
      <Text style={General.PageHead}>Your Order</Text>
      <ScrollView>
        {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
        <View>
          {cart &&
            cart.map((ele, z) => {
              total += ele.price * ele.qty;
              return <CartItem key={z} props={{productId: ele.productId}} />;
            })}
        </View>
      </ScrollView>
      <View style={{margin: 10}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 15,
              fontWeight: 'bold',
              flex: 1,
            }}>
            Total
          </Text>
          <Text style={{fontSize: 20, paddingRight: 15, fontWeight: 'bold'}}>
            ${total}
          </Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            props={{
              text: 'Proceed to CheckOut',
              width: 300,
              bgcolor: Yellow,
              color: Black,
            }}
          />
        </View>
      </View>
      <CartErrorHandler />
    </View>
  );
};

export default Cart;
