import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {useSelector} from 'react-redux';
// Helper Component
import {Button, IconButton} from '../components/Button';
import WelcomeImg from '../assets/img/general/Welcome.jpg';
// Style
import style from '../Style/style';
import {Black, White, Yellow} from '../Style/color';
const Localstyle = StyleSheet.create({
  Text: {paddingBottom: 20},
});
const Welcome = ({navigation}) => {
  const {isAuthenticated} = useSelector(state => state.auth);
  return (
    <ImageBackground
      source={WelcomeImg}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 5,
        alignSelf: 'auto',
        resizeMode: 'cover',
      }}>
      <View style={style.screenBottom}>
        <Text
          style={{
            fontSize: 60,
            color: White,
            fontWeight: 'bold',
            paddingBottom: 10,
          }}>
          FoodieLeo
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: White,
            fontWeight: 'bold',
            paddingBottom: 30,
          }}>
          Fast, Delicious {'&'} Satisfying
        </Text>
        <Button
          props={{
            text: "Let's Go Grab Something :)",
            width: 300,
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
    </ImageBackground>
  );
};

export default Welcome;
