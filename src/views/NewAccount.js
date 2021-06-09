import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
//Helper Component
import {Button, IconButton} from '../components/Button';
import {Black, Yellow} from '../Style/color';
import Notify from '../components/Toast';
// Style
import style from '../Style/style';
const Localstyle = StyleSheet.create({
  SubContainer: {marginTop: 100},
});
// Request.
import {NewAccountReq} from '../data/Request';
class NewAccount extends Component {
  constructor(navigation) {
    super(navigation);
    this.state = {
      navigation: navigation,
    };
  }
  render() {
    return (
      <View style={[style.Container, style.Center]}>
        <View style={[Localstyle.SubContainer]}>
          <View style={[style.Inline, style.Center]}>
            <IconButton
              props={{
                name: 'account-circle',
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
            placeholder="Name"
            style={style.TextInput}
            onChangeText={text => this.setState({name: text})}
            autoCompleteType="name"
          />
          <TextInput
            placeholder="Username"
            style={style.TextInput}
            onChangeText={text => this.setState({Username: text})}
            autoCompleteType="username"
          />
          <TextInput
            placeholder="Password"
            style={style.TextInput}
            secureTextEntry={true}
            onChangeText={text => this.setState({Password: text})}
            autoCompleteType="password"
          />
          <TextInput
            placeholder="Email"
            style={style.TextInput}
            onChangeText={text => this.setState({email: text})}
            autoCompleteType="email"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Address"
            style={style.TextInput}
            onChangeText={text => this.setState({address: text})}
            autoCompleteType="street-address"
          />
          <Button
            props={{
              text: 'Create Account',
              width: 300,
              bgcolor: Yellow,
              color: Black,
              onPress: async () => {
                let body = {
                  name: this.state.name,
                  username: this.state.Username,
                  password: this.state.Password,
                  email: this.state.email,
                  address: this.state.address,
                };
                const fetch_var = NewAccountReq(body);
                fetch_var
                  .then(async data => {
                    if (data.success == true) {
                      this.state.navigation.navigation.navigate('Login');
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
              text: 'Already Have Account',
              width: 300,
              bgcolor: Yellow,
              color: Black,
              onPress: () => {
                this.state.navigation.navigation.navigate('Login');
              },
            }}
          />
        </View>
      </View>
    );
  }
}
export default NewAccount;
