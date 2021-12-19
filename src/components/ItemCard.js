import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
// Helper Component
import {IconButton} from './Button';
import {Veg, NonVeg} from './Label';
import {BURGER, PIZZA, BEVERAGE} from '../data/Image';
// Style
import style from '../Style/style';
import {Black, Yellow} from '../Style/color';
const Localstyle = StyleSheet.create({
  Container: {
    width: 220,
    margin: 2,
    padding: 0,
  },
  SubContainer: {
    padding: 10,
    backgroundColor: Black,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  Img: {
    width: 220,
    height: 125,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'auto',
    resizeMode: 'cover',
  },
  Text: {
    flex: 1,
  },
});
const ItemCard = ({navigation, props}) => {
  const Labeler = prop => {
    return prop.veg === 1 ? <Veg /> : <NonVeg />;
  };
  const getImg = prop => {
    if (prop == 'BURGER') return BURGER;
    else if (prop == 'PIZZA') return PIZZA;
    else if (prop == 'BEVERAGE') return BEVERAGE;
    else return '';
  };
  return (
    <View style={Localstyle.Container}>
      <Image source={getImg(props.img)} style={Localstyle.Img} />
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
            ]}>
            ${props.cost}
          </Text>
          <IconButton
            props={{
              name: 'add-circle',
              size: 30,
              color: Yellow,
              onPress: () => {
                navigation.navigate('Item', props);
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
