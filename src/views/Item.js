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
import {Black, Green, Red, White, Yellow} from '../Style/color';
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
import {AddCartReq} from '../data/Request';

class Item extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }
  onInc = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };
  onDec = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
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
            <IconButton
              props={{
                name: 'remove',
                size: 15,
                color: White,
                bgcolor: Red,
                onPress: this.onDec,
              }}
              style={[style.Center, Localstyle.Gen]}
            />
            <Text
              style={[style.Text, style.TextWhite, style.Desc, Localstyle.Gen]}>
              {this.state.quantity}
            </Text>
            <IconButton
              props={{
                name: 'add',
                size: 15,
                color: White,
                bgcolor: Green,
                onPress: this.onInc,
              }}
              style={[style.Center, Localstyle.Gen]}
            />
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
                  const fetch_var = AddCartReq(body);
                  fetch_var
                    .then(data => {
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
