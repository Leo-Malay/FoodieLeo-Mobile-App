import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Style
import style from '../Style/style';
const Localstyle = StyleSheet.create({
  Text: {paddingBottom: 20},
});
// Helper Component
import {Button, IconButton} from '../components/Button';
import {Black, Yellow} from '../Style/color';
// Request
// import {MenuReq} from '../data/Request';
// import Notify from '../components/Toast';
import {useDispatch, useSelector} from 'react-redux';
const Welcome = ({navigation}) => {
  const {isAuthenticated} = useSelector(state => state.auth);
  return (
    <View style={style.Container}>
      <View style={style.screenBottom}>
        <IconButton
          props={{
            name: 'fastfood',
            size: 200,
            color: Black,
            onPress: () => {},
          }}
        />
        <View style={style.Inline}>
          <IconButton
            props={{
              name: 'remove',
              size: 80,
              color: Black,
              onPress: () => {},
            }}
          />
          <IconButton
            props={{
              name: 'delivery-dining',
              size: 80,
              color: Black,
              onPress: () => {},
            }}
          />
          <IconButton
            props={{
              name: 'remove',
              size: 80,
              color: Black,
              onPress: () => {},
            }}
          />
        </View>
        <Text style={[style.SuperTitle, style.Text, {marginTop: 30}]}>
          FoodieLeo
        </Text>
        <Text style={[style.Subtitle, style.Text, Localstyle.Text]}>
          Fast, Delicious {'&'} Satisfying
        </Text>
        <Button
          props={{
            text: "Let's Go Grab Something :)",
            width: 250,
            bgcolor: Yellow,
            color: Black,
            onPress: () => {
              isAuthenticated
                ? navigation.navigate('Drawer')
                : navigation.navigate('Login');
            },
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;
