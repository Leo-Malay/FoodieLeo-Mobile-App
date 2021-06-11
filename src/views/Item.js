import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import Notify from '../components/Toast';
// Helper Component
import {ScreenHeader} from '../components/Header';
import {Button, IconButton} from '../components/Button';
import {BURGER, PIZZA, BEVERAGE} from '../data/Image';
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
import {PostCartReq} from '../data/Request';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCart: false,
      ele_id: -1,
      quantity: 1,
    };
    this.SetQty();
  }
  SetQty = async () => {
    var cart = await AsyncStorage.getItem('cart');
    cart = JSON.parse(cart);
    for (var i = 0; i < cart.length; i++) {
      if (
        cart[i].type === this.props.route.params.type &&
        cart[i].uid === this.props.route.params.uid
      ) {
        this.setState({
          isCart: true,
          ele_id: i,
          quantity: cart[i].qty,
        });
        break;
      }
    }
  };
  IncQty = () => {
    this.setState({quantity: this.state.quantity + 1});
  };
  DecQty = () => {
    if (this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1});
    }
  };
  render() {
    const props = this.props.route.params;
    function getImg(prop) {
      if (prop == 'BURGER') {
        return BURGER;
      } else if (prop == 'PIZZA') {
        return PIZZA;
      } else if (prop == 'BEVERAGE') {
        return BEVERAGE;
      } else {
        return '';
      }
    }
    return (
      <View style={style.Container}>
        <ScreenHeader
          navigation={this.props.navigation}
          props={{name: 'Item'}}
        />
        <Image source={getImg(props.img)} style={Localstyle.Img} />
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
              {props.name}
            </Text>
            <Text
              style={[
                style.Text,
                style.TextWhite,
                style.Desc,
                style.Center,
                Localstyle.Gen,
              ]}>
              ${props.cost}
            </Text>
          </View>
          <Text
            style={[style.Text, style.TextWhite, style.Desc, Localstyle.Gen]}>
            Ingredients:
            {' ' + props.ingredient.join(', ')}
            {'\n'}
            {'\n'}
            Any special request? (*Terms & Conditions Apply)
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
                    this.DecQty();
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
                {this.state.quantity}
              </Text>
              <IconButton
                props={{
                  name: 'add',
                  size: 15,
                  color: Black,
                  onPress: () => {
                    this.IncQty();
                  },
                }}
                style={style.Right}
              />
            </View>
          </View>
          <View style={style.screenBottom}>
            <Button
              props={{
                text: 'Add to Cart',
                width: 300,
                color: Black,
                bgcolor: Yellow,
                onPress: async () => {
                  let body = {
                    type: props.type,
                    uid: props.uid,
                    qty: this.state.quantity,
                  };
                  var cart = await AsyncStorage.getItem('cart');
                  cart = JSON.parse(cart);
                  if (this.state.isCart == true) {
                    cart[this.state.ele_id].qty = this.state.quantity;
                  } else {
                    cart.push(body);
                  }
                  cart = JSON.stringify(cart);
                  const fetch_var = PostCartReq({cart});
                  fetch_var
                    .then(async data => {
                      await AsyncStorage.setItem('cart', cart);
                      Notify(data.msg);
                      if (data.success === true) {
                        this.props.navigation.navigate('Home');
                      }
                    })
                    .catch(err => {
                      throw err;
                    });
                },
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Item;
