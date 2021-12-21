import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
// Helper Component
import {IconButton} from './Button';
// Importing Image
import McDonalds from '../assets/img/brands/Mcdonalds.png';
import PizzaHut from '../assets/img/brands/PizzaHut.png';
import StarBucks from '../assets/img/brands/StarBucks.png';
import SubWay from '../assets/img/brands/Subway.png';
// Style
import style from '../Style/style';
import {Black, Yellow} from '../Style/color';
import {useDispatch} from 'react-redux';
import {Product} from '../redux/Actions/Menu';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Localstyle = StyleSheet.create({
  Container: {
    margin: 5,
    padding: 0,
    backgroundColor: Black,
    borderRadius: 7,
  },
  SubContainer: {
    flex: 1,
  },
  Img: {
    width: 175,
    height: 80,
    alignSelf: 'auto',
    resizeMode: 'contain',
  },
});
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
      style={[Localstyle.Container, style.Inline]}>
      <Image source={getImg(props.name)} style={Localstyle.Img} />
      <Text
        style={[
          Localstyle.Text,
          style.Subtitle,
          style.Text,
          style.TextWhite,
          {
            paddingTop: 25,
            paddingLeft: 20,
          },
        ]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};
export default BrandCard;
