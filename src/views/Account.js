import React, {useEffect, useState} from 'react';
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
const Account = ({navigation}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const ChangeEditable = () => {
    if (isEditable === true) {
      setIsEditable(false);
      SaveAccount();
    } else setIsEditable(true);
  };
  const GetBtnText = () => {
    if (isEditable === true) {
      return 'Save';
    }
    return 'Edit';
  };
  const GetAccount = () => {
    let fetch_var = GetAccountReq();
    fetch_var
      .then(data => {
        if (data.success === true) {
          setName(data.payload.name);
          setAddress(data.payload.address);
          setEmail(data.payload.email);
        } else {
          Notify(data.msg);
        }
      })
      .catch(err => {
        throw err;
      });
  };
  const SaveAccount = () => {
    let fetch_var = ChAccountReq({
      name,
      email,
      address,
    });
    fetch_var
      .then(data => {
        Notify(data.msg);
      })
      .catch(err => {
        throw err;
      });
  };
  useEffect(() => {
    GetAccount();
  }, [GetAccount]);
  return (
    <View style={style.Container}>
      <ScreenHeader navigation={navigation} props={{name: 'Account'}} />
      <View style={[Localstyle.Container, {alignItems: 'center'}]}>
        <Text style={[style.Text, style.Subtitle]}>
          Welcome {name}, Here you will be able to edit your account info :)
        </Text>
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          editable={isEditable}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          editable={isEditable}
        />
        <TextInput
          style={[style.TextInput, Localstyle.TextIn]}
          placeholder="Address"
          value={address}
          onChangeText={text => setAddress(text)}
          height={100}
          multiline={true}
          editable={isEditable}
        />
        <View>
          <Button
            props={{
              text: GetBtnText(),
              width: 300,
              bgcolor: Yellow,
              color: Black,
              onPress: ChangeEditable,
            }}
          />
        </View>
        <Text style={[style.Text, Localstyle.disclaimer, style.Center]}>
          ***Somethings may take some time as server is frequently under
          development. Feel free to contact me at malaybhavsar.290@gmail.com***
        </Text>
      </View>
    </View>
  );
};
export default Account;
