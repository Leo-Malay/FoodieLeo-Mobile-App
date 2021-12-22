import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
// Helper Component
import {IconButton} from './Button';
// Style
import style from '../Style/style';
import {Red, White} from '../Style/color';
const Localstyle = StyleSheet.create({
  Container: {
    marginVertical: 5,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#000',
  },
});
// Request
import {RemoveCart} from '../redux/Actions/Cart';
const CartItem = ({props}) => {
  const dispatch = useDispatch();
  return (
    <View style={(style.Container, Localstyle.Container)}>
      <View style={style.Inline}>
        <Text style={[style.Text, style.TextWhite, style.Title]}>
          {'\t'}
          {props.productName}
        </Text>
      </View>
      <View style={style.Inline}>
        <Text
          style={[
            style.Text,
            style.TextWhite,
            style.Desc,
            style.Center,
            {flex: 1},
          ]}>
          Cost: ${props.price}
          {'\t\t'}
          Quantity: {props.qty}
          {'\t\t'}
        </Text>
        <IconButton
          props={{
            name: 'delete',
            size: 15,
            bgcolor: Red,
            color: White,
            onPress: async () => {
              await dispatch(RemoveCart(props.productId));
            },
          }}
          style={style.Right}
        />
      </View>
    </View>
  );
};
export default CartItem;
