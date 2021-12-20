import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Helper Component
import {Button, IconButton} from '../components/Button';
import {Black, Yellow} from '../Style/color';
import Notify from '../components/Toast';
import ErrorHandler from '../components/ErrorHandler';
// Style
import style from '../Style/style';
const Localstyle = StyleSheet.create({
  SubContainer: {
    marginTop: 150,
  },
});
// Request.
import {login} from '../redux/Actions/Auth';
import {useDispatch, useSelector} from 'react-redux';
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated, isLoading} = useSelector(state => state.auth);
  const GetCredentials = async () => {
    try {
      setUsername(await AsyncStorage.getItem('Username'));
      setPassword(await AsyncStorage.getItem('Password'));
    } catch (err) {
      throw err;
    }
  };
  const submitHandler = async e => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  useEffect(() => {
    if (isAuthenticated) navigation.navigate('Drawer');
    GetCredentials();
  }, [isAuthenticated]);
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
          value={username}
          onChangeText={text => setUsername(text)}
          autoCompleteType="username"
        />
        <TextInput
          placeholder="Password"
          style={style.TextInput}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          autoCompleteType="password"
        />
        <Button
          props={{
            text: isLoading ? '.....' : 'Login',
            width: 300,
            bgcolor: Yellow,
            color: Black,
            onPress: submitHandler,
          }}
        />
        <Button
          props={{
            text: 'NewAccount',
            width: 300,
            bgcolor: Yellow,
            color: Black,
            onPress: () => {
              navigation.navigate('NewAccount');
            },
          }}
        />
      </View>
      <ErrorHandler />
    </View>
  );
};
export default Login;
