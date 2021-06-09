import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
// Helper Component
import {ScreenHeader} from '../components/Header';
import {Button} from '../components/Button';
import Notify from '../components/Toast';
// Style
import style from '../Style/style';
import {Black, Red, Yellow} from '../Style/color';
const Localstyle = StyleSheet.create({
  Container: {padding: 5},
  TextIn: {
    width: 350,
  },
  Btn: {alignItems: 'center', paddingBottom: 20},
  disclaimer: {fontSize: 12, color: Red},
});
// Request
import {GetAccountReq, ChAccountReq} from '../data/Request';
export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
    };
    this.GetAccount();
  }
  ChangeEditable = () => {
    if (this.state.isEditable === true) {
      this.setState({isEditable: false});
      this.SaveAccount();
    } else {
      this.setState({isEditable: true});
    }
  };
  GetBtnText = () => {
    if (this.state.isEditable === true) {
      return 'Save';
    }
    return 'Edit';
  };
  GetAccount = () => {
    let fetch_var = GetAccountReq();
    fetch_var
      .then(data => {
        if (data.success === true) {
          this.setState({
            name: data.payload.name,
            address: data.payload.address,
            email: data.payload.email,
          });
        } else {
          Notify(data.msg);
        }
      })
      .catch(err => {
        throw err;
      });
  };
  SaveAccount = () => {
    let fetch_var = ChAccountReq({
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
    });
    fetch_var
      .then(data => {
        Notify(data.msg);
      })
      .catch(err => {
        throw err;
      });
  };
  render() {
    return (
      <View style={style.Container}>
        <ScreenHeader
          navigation={this.props.navigation}
          props={{name: 'Account'}}
        />
        <View style={[Localstyle.Container, {alignItems: 'center'}]}>
          <Text style={[style.Text, style.Subtitle]}>
            Welcome {this.state.Name}, Here you will be able to edit your
            account info :)
          </Text>
          <TextInput
            style={[style.TextInput, Localstyle.TextIn]}
            placeholder="Name"
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
            editable={this.state.isEditable}
          />
          <TextInput
            style={[style.TextInput, Localstyle.TextIn]}
            placeholder="Email"
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
            editable={this.state.isEditable}
          />
          <TextInput
            style={[style.TextInput, Localstyle.TextIn]}
            placeholder="Address"
            value={this.state.address}
            onChangeText={text => this.setState({address: text})}
            height={100}
            multiline={true}
            editable={this.state.isEditable}
          />
          <View>
            <Button
              props={{
                text: this.GetBtnText(),
                width: 300,
                bgcolor: Yellow,
                color: Black,
                onPress: this.ChangeEditable,
              }}
            />
          </View>
          <Text style={[style.Text, Localstyle.disclaimer, style.Center]}>
            ***Somethings may take some time as server is frequently under
            development. Feel free to contact me at
            malaybhavsar.290@gmail.com***
          </Text>
        </View>
      </View>
    );
  }
}
