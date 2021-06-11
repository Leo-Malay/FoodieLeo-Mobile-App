import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Helper Component
import {ScreenHeader} from '../components/Header';
import {IconButton, Button} from '../components/Button';
import CartItem from '../components/CartItem';
import Menu from '../data/Menu';
// Style
import style from '../Style/style';
import {Black, Yellow} from '../Style/color';
// Request
import {GetCartReq, OrderReq, PostCartReq} from '../data/Request';
import Notify from '../components/Toast';

class Cart extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {cart: [], MenuData: [], navigation};
    this.GetData();
  }
  GetData = async () => {
    const cart = JSON.parse(await AsyncStorage.getItem('cart'));
    const MenuData = await Menu();
    this.setState({cart: cart, MenuData: MenuData});
  };
  ShowData = () => {
    if (this.state.cart.length == 0) {
      return (
        <View style={{alignItems: 'center'}}>
          <IconButton
            props={{
              name: 'shopping-bag',
              size: 100,
              color: Black,
              onPress: () => {},
            }}
          />
          <Text
            style={[
              style.Center,
              style.Text,
              style.Subtitle,
              {paddingVertical: 10},
            ]}>
            Cart Empty! Grab something Quickly ;)
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          {this.state.cart.map((ele, z) => {
            for (var i = 0; i < this.state.MenuData.length; i++) {
              if (this.state.MenuData[i].type === ele.type) {
                for (var j = i; j < this.state.MenuData.length; j++) {
                  if (this.state.MenuData[j].uid === ele.uid) {
                    var prop = this.state.MenuData[j];
                    var key = ele.type + ele.uid;
                    return (
                      <CartItem
                        key={key}
                        props={{
                          type: ele.type,
                          uid: ele.uid,
                          name: prop.name,
                          cost: prop.cost,
                          quantity: ele.qty,
                          veg: prop.veg,
                          onPress: async () => {
                            var cart = await AsyncStorage.getItem('cart');
                            cart = JSON.parse(cart);
                            delete cart[z];
                            cart = cart.filter((value, index, array) => {
                              return value != undefined;
                            });
                            cart = JSON.stringify(cart);
                            const fetch_var = PostCartReq({cart});
                            fetch_var
                              .then(async data => {
                                await AsyncStorage.setItem('cart', cart);
                                Notify(data.msg);
                              })
                              .catch(err => {
                                throw err;
                              });
                          },
                        }}
                      />
                    );
                  }
                }
              }
            }
          })}
        </View>
      );
    }
  };
  componentDidMount() {
    setInterval(() => {
      this.GetData();
    }, 5000);
  }
  render() {
    return (
      <View style={style.Container}>
        <ScrollView>
          <ScreenHeader
            navigation={this.state.navigation.navigation}
            props={{name: 'Cart'}}
          />
          {this.ShowData()}
          <View style={style.Center}>
            <Button
              props={{
                text: 'Proceed to CheckOut',
                width: 300,
                bgcolor: Yellow,
                color: Black,
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Cart;
