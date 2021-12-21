import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
//Helper Component
import {Button, IconButton} from '../components/Button';
import {Black, Yellow} from '../Style/color';
// Style
import style from '../Style/style';
const Localstyle = StyleSheet.create({
  SubContainer: {marginTop: 100},
});
// Request.
//import {NewAccountReq} from '../data/Request';
import {newAccount} from '../redux/Actions/Auth';
import {useDispatch, useSelector} from 'react-redux';
import {AuthErrorHandler} from '../components/ErrorHandler';
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
          placeholder="First Name"
          style={style.TextInput}
          value={fname}
          onChangeText={text => setFName(text)}
          autoCompleteType="name"
        />
        <TextInput
          placeholder="Last Name"
          style={style.TextInput}
          value={lname}
          onChangeText={text => setLName(text)}
          autoCompleteType="name"
        />
        <TextInput
          placeholder="Email"
          style={style.TextInput}
          value={email}
          onChangeText={text => setEmail(text)}
          autoCompleteType="email"
          keyboardType="email-address"
        />
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
      </View>
      <AuthErrorHandler />
    </View>
  );
};
export default NewAccount;
