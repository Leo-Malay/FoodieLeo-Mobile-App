import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
// Helper Component
import {IconButton} from './Button';
import {Veg, NonVeg} from './Label';
// Importing Image
import BEVERAGE from '../assets/img/products/Beverages.jpg';
import BURGER from '../assets/img/products/Burger.jpg';
import FRENCHFRIES from '../assets/img/products/ff.jpg';
import PIZZA from '../assets/img/products/Pizza.jpg';
import SUB from '../assets/img/products/sub.jpg';
// Style
import style from '../Style/style';
import {Black, Yellow} from '../Style/color';
const Localstyle = StyleSheet.create({
  Container: {
    margin: 5,
    padding: 0,
    borderRadius: 5,
    backgroundColor: Black,
  },
  SubContainer: {
    margin: 10,
    flex: 1,
  },
  Img: {
    width: 175,
    height: 100,
    alignSelf: 'auto',
    resizeMode: 'cover',
  },
});
const ItemCard = ({navigation, props}) => {
  const dispatch = useDispatch();
  const Labeler = prop => {
    return prop.veg ? <Veg /> : <NonVeg />;
  };
  const getImg = prop => {
    if (prop == 'BURGER') return BURGER;
    else if (prop == 'PIZZA') return PIZZA;
    else if (prop == 'BEVERAGE') return BEVERAGE;
    else if (prop == 'SANDWICH') return SUB;
    else if (prop == 'FRIED') return FRENCHFRIES;
    else return '';
  };
  return (
    <View style={[Localstyle.Container, style.Inline]}>
      <Image source={getImg(props.category)} style={Localstyle.Img} />
      <View style={Localstyle.SubContainer}>
        <View style={style.Inline}>
          <Labeler veg={props.veg} />
          <Text
            style={[
              Localstyle.Text,
              style.Subtitle,
              style.Text,
              style.TextWhite,
            ]}>
            {props.name}
          </Text>
        </View>
        <View style={style.Inline}>
          <Text
            style={[
              Localstyle.Text,
              style.Text,
              style.TextWhite,
              style.Center,
              {flex: 1},
            ]}>
            ${props.price}
          </Text>
          <IconButton
            props={{
              name: 'add-circle',
              size: 30,
              color: Yellow,
              onPress: async () => {
                await dispatch({type: 'SET_PRODUCT', data: props});
                navigation.navigate('Item');
              },
            }}
            style={[style.Right]}
          />
        </View>
      </View>
    </View>
  );
};
export default ItemCard;
