import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from './Button';
import {Veg, NonVeg} from './Label';
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
const CartItem = ({props}) => {
  const GetLabel = () => {
    if (props.veg === 1) {
      return <Veg />;
    } else {
      return <NonVeg />;
    }
  };
  return (
    <View style={(style.Container, Localstyle.Container)}>
      <View style={style.Inline}>
        {GetLabel()}
        <Text style={[style.Text, style.TextWhite, style.Title]}>
          {'\t'}
          {props.name}
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
          Cost: ${props.cost}
          {'\t\t'}
          Quantity: {props.quantity}
          {'\t\t'}
        </Text>

        <IconButton
          props={{
            name: 'delete',
            size: 15,
            bgcolor: Red,
            color: White,
            onPress: props.onPress,
          }}
          style={style.Right}
        />
      </View>
    </View>
  );
};
export default CartItem;
