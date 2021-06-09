import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// Helper Components
import {IconButton} from './Button';
// Style
import style from '../Style/style';
import {Black, Yellow} from '../Style/color';
const Localstyle = StyleSheet.create({
  Container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Black,
  },
  Subcontainer: {flex: 1},
});
// Main Component
const ScreenHeader = ({navigation, props}) => {
  return (
    <View style={[Localstyle.Container, style.Inline]}>
      <IconButton
        props={{
          name: 'arrow-back',
          size: 20,
          color: Yellow,
          onPress: () => {
            navigation.goBack();
          },
        }}
      />
      <View style={Localstyle.Subcontainer}>
        <Text
          style={[
            style.Subtitle,
            style.Text,
            style.TextYellow,
            style.TextCenter,
            {paddingTop: 5},
          ]}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};
const HomeHeader = ({navigation, props}) => {
  return (
    <View style={[Localstyle.Container, style.Inline]}>
      <View style={[Localstyle.Subcontainer, style.Inline]}>
        <IconButton
          props={{
            name: 'menu',
            size: 30,
            color: Yellow,
            onPress: () => {
              navigation.toggleDrawer();
            },
          }}
          style={style.Right}
        />
        <Text style={[style.Title, style.Text, style.TextYellow]}>
          {props.name}
        </Text>
      </View>
      <IconButton
        props={{
          name: 'shopping-cart',
          size: 30,
          color: Yellow,
          onPress: () => {
            navigation.navigate('Cart');
          },
        }}
        style={style.Right}
      />
    </View>
  );
};

export {ScreenHeader, HomeHeader};
/**
 *  Usage of the components
 *  <HomeHeader navigation={navigation} props={{name: 'title_screen'}} />
 *  <ScreenHeader navigation={navigation} props={{name: 'title_screen'}} />
 */
