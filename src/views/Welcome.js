import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Style
import style from '../Style/style';
const Localstyle = StyleSheet.create({
  Text: {paddingBottom: 20},
});
// Helper Component
import {Button, IconButton} from '../components/Button';
import {Black, Yellow} from '../Style/color';
// Request
import {MenuReq} from '../data/Request';
import Notify from '../components/Toast';
class Welcome extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      token: '',
      navigation: navigation,
    };
    this.GetToken();
    this.GetMenu();
    this.GetCart();
  }
  async GetToken() {
    try {
      const Token = await AsyncStorage.getItem('token');
      if (Token === null) {
        this.setState({token: ''});
      } else {
        this.setState({token: Token});
      }
    } catch (err) {
      Notify('Unable to connect to server');
      throw err;
    }
  }
  async GetMenu() {
    try {
      const menu = await AsyncStorage.getItem('menu');
      if (menu === null) {
        let fetch_var = MenuReq({});
        fetch_var
          .then(async data => {
            if (data.success === true) {
              await AsyncStorage.setItem('menu', JSON.stringify(data.menu));
              Notify('Menu Updated');
            } else {
              Notify(data.msg);
            }
          })
          .catch(err => {
            throw err;
          });
      }
    } catch (err) {
      Notify('Unable to connect to server');
      throw err;
    }
  }
  async GetCart() {
    try {
      const cart = await AsyncStorage.getItem('cart');
      if (cart === null) {
        await AsyncStorage.setItem('cart', JSON.stringify([]));
      }
    } catch (err) {
      throw err;
    }
  }
  render() {
    return (
      <View style={style.Container}>
        <View style={style.screenBottom}>
          <IconButton
            props={{
              name: 'fastfood',
              size: 200,
              color: Black,
              onPress: () => {},
            }}
          />
          <View style={style.Inline}>
            <IconButton
              props={{
                name: 'remove',
                size: 80,
                color: Black,
                onPress: () => {},
              }}
            />
            <IconButton
              props={{
                name: 'delivery-dining',
                size: 80,
                color: Black,
                onPress: () => {},
              }}
            />
            <IconButton
              props={{
                name: 'remove',
                size: 80,
                color: Black,
                onPress: () => {},
              }}
            />
          </View>
          <Text style={[style.SuperTitle, style.Text, {marginTop: 30}]}>
            FoodieLeo
          </Text>
          <Text style={[style.Subtitle, style.Text, Localstyle.Text]}>
            Fast, Delicious & Satisfying
          </Text>
          <Button
            props={{
              text: "Let's Go Grab Something :)",
              width: 250,
              bgcolor: Yellow,
              color: Black,
              onPress: () => {
                if (this.state.token === '') {
                  this.state.navigation.navigation.navigate('Login');
                } else {
                  this.state.navigation.navigation.navigate('Drawer');
                }
              },
            }}
          />
        </View>
      </View>
    );
  }
}

export default Welcome;
