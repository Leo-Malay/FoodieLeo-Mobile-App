import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Helper Component
import {Button, IconButton} from '../components/Button';
import {Black, Yellow} from '../Style/color';
import Notify from '../components/Toast';
// Style
import style from '../Style/style';
const Localstyle = StyleSheet.create({
  SubContainer: {
    marginTop: 150,
  },
});
// Request.
import {LoginReq, GetCartReq} from '../data/Request';

class Login extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      navigation: navigation,
      Username: '',
      Password: '',
    };
  }
  GetCredentials = async () => {
    try {
      let User = await AsyncStorage.getItem('Username');
      let Pass = await AsyncStorage.getItem('Password');
      this.setState({Username: User, Password: Pass});
    } catch (err) {
      throw err;
    }
  };
  render() {
    return (
      <View style={[style.Container, style.Center]}>
        <View style={[Localstyle.SubContainer]}>
          <View style={[style.Inline, style.Center]}>
            <IconButton
              props={{
                name: 'fingerprint',
                size: 70,
                color: Black,
                onPress: () => {},
              }}
              style={[style.Center]}
            />
            <Text
              style={[style.Text, style.TextBlack, style.Title, style.Center]}>
              Leo-Login
            </Text>
          </View>
          <TextInput
            placeholder="Username"
            style={style.TextInput}
            value={this.state.Username}
            onChangeText={text => this.setState({Username: text})}
            autoCompleteType="username"
          />
          <TextInput
            placeholder="Password"
            style={style.TextInput}
            value={this.state.Password}
            secureTextEntry={true}
            onChangeText={text => this.setState({Password: text})}
            autoCompleteType="password"
          />
          <Button
            props={{
              text: 'Login',
              width: 300,
              bgcolor: Yellow,
              color: Black,
              onPress: async () => {
                let body = {
                  username: this.state.Username,
                  password: this.state.Password,
                };
                const fetch_var = LoginReq(body);
                fetch_var
                  .then(async data => {
                    if (data.success == true) {
                      try {
                        await AsyncStorage.setItem('token', data.token);
                        const fetch_var1 = GetCartReq(body);
                        fetch_var1
                          .then(async data => {
                            if (data.success == true) {
                              await AsyncStorage.setItem('cart', data.cart);
                              this.state.navigation.navigation.navigate(
                                'Drawer',
                              );
                            }
                          })
                          .catch(err => {
                            Notify('Unable to fetch your cart');
                            throw err;
                          });
                      } catch (err) {
                        Notify('Unable to connect to server');
                        throw err;
                      }
                    } else {
                      Notify(data.msg);
                    }
                  })
                  .catch(err => {
                    Notify('Unable to connect to server');
                    throw err;
                  });
              },
            }}
          />
          <Button
            props={{
              text: 'NewAccount',
              width: 300,
              bgcolor: Yellow,
              color: Black,
              onPress: () => {
                this.state.navigation.navigation.navigate('NewAccount');
              },
            }}
          />
        </View>
      </View>
    );
  }
}
export default Login;
