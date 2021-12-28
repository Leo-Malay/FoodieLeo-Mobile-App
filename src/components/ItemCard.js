import React from 'react';
import {View, Image, Text} from 'react-native';
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
    <View
      style={{
        width: 180,
        height: 200,
        paddingTop: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontSize: 22,
          textAlign: 'center',
          fontWeight: 'bold',
          paddingBottom: 5,
        }}>
        {props.name}
      </Text>
      <Image
        source={getImg(props.category)}
        style={{
          paddingTop: 0,
          marginTop: 0,
          width: 175,
          height: 100,
          alignSelf: 'auto',
          resizeMode: 'contain',
        }}
      />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: Black,
            paddingTop: 20,
            paddingLeft: 20,
            paddingBottom: 5,
            flex: 1,
          }}>
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
  );
};
export default ItemCard;
