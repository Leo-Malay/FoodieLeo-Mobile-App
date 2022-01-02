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
import LoginImg from '../../assets/img/general/Login.webp';
// Request.
import {login} from '../../redux/Actions/Auth';
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated, isLoading} = useSelector(state => state.auth);
  const submitHandler = async e => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  useEffect(() => {
    if (isAuthenticated) navigation.navigate('Drawer');
    GetCredentials();
  }, [isAuthenticated]);
  return (
    <ImageBackground source={LoginImg} style={Auth.BgImage}>
      <View style={Auth.Container}>
        <View style={Auth.Card}>
          <Text style={Auth.CardTitle}>Login</Text>
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
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            autoCompleteType="password"
          />
          <Button
            props={{
              text: isLoading ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                'Login'
              ),
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
          <View style={Auth.SaluteContainer}>
            <Text style={Auth.Salute}>Made with 💛 By Malay Bhavsar</Text>
          </View>
        </View>
      </View>
      <AuthErrorHandler />
    </ImageBackground>
  );
};
export default Login;
