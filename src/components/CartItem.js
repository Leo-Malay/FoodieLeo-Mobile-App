import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Helper Component
import {IconButton} from './Button';
// Style
import {Red, White, Yellow, Black, Green} from '../Style/color';
// Request
import {RemoveCart, AddCart} from '../redux/Actions/Cart';
const CartItem = ({props}) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);
  var data;
  useEffect(() => {
    data = cart.filter(cart => {
      return cart.productId === props.productId;
    })[0];
    if (data?.qty) setQty(data?.qty);
    if (data?.productName) setProductName(data?.productName);
    if (data?.price) setPrice(data?.price);
  }, [cart, props]);
  const [qty, setQty] = useState(data?.qty);
  const [productName, setProductName] = useState(data?.productName);
  const [price, setPrice] = useState(data?.price);
  const [isEdited, setIsEdited] = useState(false);
  return (
    <View
      style={{
        elevation: 5,
        margin: 5,
        marginHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#eee',
        borderRadius: 5,
      }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          paddingTop: 5,
          paddingLeft: 10,
        }}>
        {'\t'}
        {productName}
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            paddingTop: 5,
            paddingLeft: 15,
            flex: 1,
          }}>
          ${price}
        </Text>
        <View
          style={{
            backgroundColor: Yellow,
            borderRadius: 50,
            marginTop: 4,
            width: 75,
            height: 30,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginRight: 10,
          }}>
          <IconButton
            props={{
              name: 'remove',
              size: 15,
              color: Black,
              pad: 1,
              onPress: () => {
                if (qty > 1) {
                  setQty(qty - 1);
                  setIsEdited(true);
                }
              },
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              paddingTop: 5,
              textAlign: 'center',
              flex: 1,
            }}>
            {qty}
          </Text>
          <IconButton
            props={{
              name: 'add',
              size: 15,
              color: Black,
              pad: 1,
              onPress: () => {
                if (data?.buyQtyLimit > qty) {
                  setQty(qty + 1);
                  setIsEdited(true);
                }
              },
            }}
          />
        </View>
        <View style={{marginRight: 10}}>
          {!isEdited && (
            <IconButton
              props={{
                name: 'delete',
                size: 18,
                bgcolor: Red,
                color: White,
                pad: 5,
                onPress: async () => {
                  await dispatch(RemoveCart(props.productId));
                },
              }}
            />
          )}
          {isEdited && (
            <IconButton
              props={{
                name: 'check',
                size: 18,
                bgcolor: Green,
                color: White,
                pad: 5,
                onPress: async () => {
                  await dispatch(AddCart(props.productId, qty));
                  setIsEdited(false);
                },
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};
export default CartItem;
