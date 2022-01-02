import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
// Importing Image
import McDonalds from '../assets/img/brands/Mcdonalds.webp';
import PizzaHut from '../assets/img/brands/PizzaHut.webp';
import StarBucks from '../assets/img/brands/StarBucks.webp';
import SubWay from '../assets/img/brands/Subway.webp';
// Request
import {Product} from '../redux/Actions/Menu';

const BrandCard = ({navigation, props}) => {
  const dispatch = useDispatch();
  const getImg = prop => {
    if (prop == "McDonald's") return McDonalds;
    else if (prop == 'PizzaHut') return PizzaHut;
    else if (prop == 'StarBucks') return StarBucks;
    else if (prop == 'Subway') return SubWay;
    else return '';
  };
  return (
    <TouchableOpacity
      onPress={async () => {
        await dispatch(Product(props._id));
        navigation.navigate('Resturant');
      }}
      style={{
        width: 120,
        height: 150,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
      }}>
      <Image
        source={getImg(props.name)}
        style={{
          paddingTop: 0,
          marginTop: 0,
          width: 100,
          height: 100,
          alignSelf: 'auto',
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          fontSize: 16,
          paddingTop: 5,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};
export default BrandCard;
