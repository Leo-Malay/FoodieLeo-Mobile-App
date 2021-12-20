import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Style
import style from '../Style/style';
import {logout} from '../redux/Actions/Auth';
import {useDispatch} from 'react-redux';
const Logout = ({navigation}) => {
  const dispatch = useDispatch();
  const clear = async () => {
    await dispatch(logout());
    navigation.navigate('Welcome');
  };
  clear();
  return (
    <View style={[style.Container, style.Center]}>
      <Text style={[style.Title, {paddingTop: 100}]}>
        Logging you out of the App
      </Text>
    </View>
  );
};
export default Logout;
