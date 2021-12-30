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
import FRENCHFRIES from '../assets/img/products/FrenchFries.jpg';
import PIZZA from '../assets/img/products/Pizza.jpg';
import PASTA from '../assets/img/products/Pasta.jpg';
import SANDWICH from '../assets/img/products/Sandwich.jpg';
import SUB from '../assets/img/products/Sub.jpg';
// Style
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
    else if (prop == 'PIZZA') return PASTA;
    else if (prop == 'BEVERAGE') return BEVERAGE;
    else if (prop == 'SANDWICH') return SUB;
    else if (prop == 'FRIED') return FRENCHFRIES;
    else if (prop == 'SANDWICH') return SANDWICH;
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
          width: '80%',
          height: '40%',
          resizeMode: 'contain',
          borderRadius: 20,
          justifyContent: 'center',
          alignSelf: 'center',
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
            width: 120,
            height: 35,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <IconButton
            props={{
              name: 'remove',
              size: 18,
              pad: 4,
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
              paddingTop: 8,
              textAlign: 'center',
              flex: 1,
            }}>
            {qty}
          </Text>
          <IconButton
            props={{
              name: 'add',
              size: 18,
              pad: 4,
              color: Black,
              onPress: () => {
                if (product.buyQtyLimit > qty) setQty(qty + 1);
              },
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'justify',
            color: Black,
            paddingVertical: 10,
            paddingLeft: 15,
            flex: 1,
          }}>
          Ingredients
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'justify',
            paddingVertical: 10,
            paddingHorizontal: 10,
            flex: 2,
          }}>
          {product?.ingredients && product?.ingredients.join(', ')}
        </Text>
      </View>
      <TextInput
        style={{
          backgroundColor: White,
          borderRadius: 10,
          width: '80%',
          height: 100,
          paddingHorizontal: 15,
          marginHorizontal: '10%',
          marginVertical: 10,
        }}
        multiline={true}
        placeholder="Any Special Request?"
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
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
