import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
// Request
import {logout} from '../redux/Actions/Auth';
// Style
import style from '../Style/style';
const Logout = ({navigation}) => {
  const dispatch = useDispatch();
  const clear = async () => {
    await dispatch(logout());
    navigation.navigate('Welcome');
  };
  clear();
  return (
    <View style={[style.Container, style.Center]}>
      <Text style={[style.Title, {paddingTop: 100, textAlign: 'center'}]}>
        Logging you out of the App
        <ActivityIndicator size="large" color="#0000ff" />
      </Text>
    </View>
  );
};
export default Logout;
