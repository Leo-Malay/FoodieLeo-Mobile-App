import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
//Helper Component
import {Button} from '../../components/Button';
import {AuthErrorHandler} from '../../components/ErrorHandler';
// Style
import Auth from '../../Style/Auth';
import {Black, Yellow} from '../../Style/color';
import NewAccountImg from '../../assets/img/general/Login.webp';
// Request.
import {newAccount} from '../../redux/Actions/Auth';
const NewAccount = ({navigation}) => {
  const dispatch = useDispatch();
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated, isLoading} = useSelector(state => state.auth);
  const submitHandler = async e => {
    e.preventDefault();
    dispatch(newAccount(fname, lname, email, username, password));
  };
  useEffect(() => {
    if (isAuthenticated) navigation.navigate('Home');
  }, [isAuthenticated]);
  return (
    <ImageBackground source={NewAccountImg} style={Auth.BgImage}>
      <View style={Auth.Container}>
        <View style={Auth.Card}>
          <Text style={Auth.CardTitle}>New Account</Text>
          <TextInput
            placeholder="First Name"
            style={Auth.Input}
            value={fname}
            onChangeText={text => setFName(text)}
            autoCompleteType="name"
          />
          <TextInput
            placeholder="Last Name"
            style={Auth.Input}
            value={lname}
            onChangeText={text => setLName(text)}
            autoCompleteType="name"
          />
          <TextInput
            placeholder="Email"
            style={Auth.Input}
            value={email}
            onChangeText={text => setEmail(text)}
            autoCompleteType="email"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Username"
            style={Auth.Input}
            value={username}
            onChangeText={text => setUsername(text)}
            autoCompleteType="username"
          />
          <TextInput
            placeholder="Password"
            style={Auth.Input}
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            autoCompleteType="password"
          />
          <Button
            props={{
              text: isLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                'Create Account'
              ),
              width: 300,
              bgcolor: Yellow,
              color: Black,
              onPress: submitHandler,
            }}
          />
          <Button
            props={{
              text: 'Already Have Account',
              width: 300,
              bgcolor: Yellow,
              color: Black,
              onPress: () => {
                navigation.navigate('Login');
              },
            }}
          />
          <View style={Auth.SaluteContainer}>
            <Text style={Auth.Salute}>Made with 💛 By Malay Bhavsar</Text>
          </View>
        </View>
      </View>
      <AuthErrorHandler />
    </ImageBackground>
  );
};
export default NewAccount;
