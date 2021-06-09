import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
// Helper Component
import {ScreenHeader} from '../components/Header';
import {Button, IconButton} from '../components/Button';
import CartItem from '../components/CartItem';
import MenuData from '../data/Menu.json';
// Style
import style from '../Style/style';
import {Black, Yellow} from '../Style/color';
// Request
import {RmCartReq, GetCartReq} from '../data/Request';
import Notify from '../components/Toast';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      Cart: [],
      cartEmpty: false,
    };
    this.GetCart();
  }
  GetCart = () => {
    let fetch_var = GetCartReq();
    fetch_var
      .then(data => {
        if (data.success === true) {
          if (data.cart.length === 0) {
            this.setState({cartEmpty: true});
          } else {
            this.setState({Cart: data.cart});
          }
        } else {
          Notify('Unable to fetch the cart data');
        }
      })
      .catch(err => {
        throw err;
      });
  };
  ShowCart = () => {
    if (this.state.cartEmpty === true) {
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
    } else if (this.state.Cart.length > 0) {
      return this.state.Cart.map(ele => {
        for (var i = 0; i < MenuData.length; i++) {
          if (MenuData[i].type === ele.type) {
            for (var j = i; j < MenuData.length; j++) {
              if (MenuData[j].uid === ele.uid) {
                var prop = MenuData[j];
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
                      onPress: () => {
                        let fetch_var = RmCartReq({
                          type: ele.type,
                          uid: ele.uid,
                        });
                        fetch_var
                          .then(data => {
                            if (data.success === true) {
                              Notify(data.msg);
                              this.GetCart();
                            }
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
      });
    } else {
      return (
        <Text
          style={[
            style.Center,
            style.Text,
            style.Subtitle,
            {paddingVertical: 10},
          ]}>
          Fetching cart...
        </Text>
      );
    }
  };

  render() {
    return (
      <View style={style.Container}>
        <ScrollView>
          <ScreenHeader
            navigation={this.props.navigation}
            props={{name: 'Cart'}}
          />
          {this.ShowCart()}
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
