import React, {useState} from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Helper Component
import {ScreenHeader} from '../components/Header';
import {Button, IconButton} from '../components/Button';
import {CartErrorHandler} from '../components/ErrorHandler';
// Importing Image
import BEVERAGE from '../assets/img/products/Beverages.jpg';
import BURGER from '../assets/img/products/Burger.jpg';
import FRENCHFRIES from '../assets/img/products/ff.jpg';
import PIZZA from '../assets/img/products/Pizza.jpg';
import SUB from '../assets/img/products/sub.jpg';
// Style
import style from '../Style/style';
import {Black, White, Yellow} from '../Style/color';
const Localstyle = StyleSheet.create({
  SubContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: Black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  Img: {
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'auto',
    resizeMode: 'cover',
  },
  Gen: {paddingVertical: 5, paddingHorizontal: 10},
  TextIn: {
    backgroundColor: White,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
    height: 100,
    padding: 5,
    margin: 5,
  },
});
// Request
import {AddCart} from '../redux/Actions/Cart';

const Item = ({navigation}) => {
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.menu);
  const {isLoading} = useSelector(state => state.cart);
  const [qty, setQty] = useState(1);
  const getImg = prop => {
    if (prop == 'BURGER') return BURGER;
    else if (prop == 'PIZZA') return PIZZA;
    else if (prop == 'BEVERAGE') return BEVERAGE;
    else if (prop == 'SANDWICH') return SUB;
    else if (prop == 'FRIED') return FRENCHFRIES;
    else return '';
  };
  return (
    <View style={style.Container}>
      <ScreenHeader navigation={navigation} props={{name: 'Item'}} />
      <Image source={getImg(product?.category)} style={Localstyle.Img} />
      <View style={Localstyle.SubContainer}>
        <View style={style.Inline}>
          <Text
            style={[
              style.Text,
              style.TextWhite,
              style.Subtitle,
              Localstyle.Gen,
              {flex: 1},
            ]}>
            {product?.name}
          </Text>
          <Text
            style={[
              style.Text,
              style.TextWhite,
              style.Desc,
              style.Center,
              Localstyle.Gen,
            ]}>
            ${product?.price}
          </Text>
        </View>
        <Text style={[style.Text, style.TextWhite, style.Desc, Localstyle.Gen]}>
          Ingredients:
          {' ' + (product?.ingredients && product?.ingredients.join(', '))}
          {'\n'}
          {'\n'}
          Any special request? (*Terms {'&'} Conditions Apply)
        </Text>
        <TextInput style={Localstyle.TextIn} multiline={true} />
        <View style={[style.Inline, {paddingTop: 15}]}>
          <Text
            style={[style.Text, style.TextWhite, style.Desc, Localstyle.Gen]}>
            Quantity:{'\t'}
          </Text>
          <View
            style={[
              {
                backgroundColor: Yellow,
                borderRadius: 50,
                width: 95,
              },
              style.Inline,
            ]}>
            <IconButton
              props={{
                name: 'remove',
                size: 15,
                color: Black,
                onPress: () => {
                  if (qty > 1) setQty(qty - 1);
                },
              }}
              style={[style.Left]}
            />
            <Text
              style={[
                style.Text,
                style.Center,
                {flex: 1, color: Black, textAlign: 'center'},
              ]}>
              {qty}
            </Text>
            <IconButton
              props={{
                name: 'add',
                size: 15,
                color: Black,
                onPress: () => {
                  if (product.buyQtyLimit > qty) setQty(qty + 1);
                },
              }}
              style={style.Right}
            />
          </View>
        </View>
        <View style={style.screenBottom}>
          <Button
            props={{
              text: isLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                'Add to Cart [Total: $' + qty * product.price + ']'
              ),
              width: 300,
              color: Black,
              bgcolor: Yellow,
              onPress: async () => {
                await dispatch(AddCart(product._id, qty));
              },
            }}
          />
        </View>
      </View>
      <CartErrorHandler />
    </View>
  );
};

export default Item;
