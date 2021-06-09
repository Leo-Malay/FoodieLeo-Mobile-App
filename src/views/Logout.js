import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Style
import style from '../Style/style';
const Logout = ({navigation}) => {
  const clear = async () => {
    try {
      await AsyncStorage.setItem('token', '');
      navigation.navigate('Welcome');
    } catch (err) {
      throw err;
    }
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
