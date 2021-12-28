import React, {useState} from 'react';
import {ActivityIndicator, View, Image, Text, TextInput} from 'react-native';
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
    <View>
      <ScreenHeader navigation={navigation} props={{name: 'Item'}} />
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingVertical: 10,
        }}>
        {product?.name}
      </Text>
      <Image
        source={getImg(product?.category)}
        style={{
          width: '100%',
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingVertical: 10,
        }}>
        ${product?.price}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: Yellow,
            borderRadius: 50,
            width: 140,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <IconButton
            props={{
              name: 'remove',
              size: 15,
              color: Black,
              onPress: () => {
                if (qty > 1) setQty(qty - 1);
              },
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              paddingTop: 12,
              paddingHorizontal: 13,
            }}>
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
          />
        </View>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingVertical: 10,
        }}>
        Ingredients:
        {' ' + (product?.ingredients && product?.ingredients.join(', '))}
        {'\n'}
        {'\n'}
        Any special request? (*Terms {'&'} Conditions Apply)
      </Text>
      <TextInput
        style={{
          backgroundColor: White,
          borderRadius: 10,
          width: 200,
          height: 100,
          padding: 5,
          margin: 5,
        }}
        multiline={true}
      />
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
      <CartErrorHandler />
    </View>
  );
};

export default Item;
