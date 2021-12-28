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
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <IconButton
        props={{
          name: 'arrow-back',
          size: 25,
          color: Black,
          onPress: () => {
            navigation.goBack();
          },
        }}
      />
    </View>
  );
};
const HomeHeader = ({navigation, props}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <IconButton
        props={{
          name: 'menu',
          size: 25,
          color: Black,
          onPress: () => {
            navigation.toggleDrawer();
          },
        }}
      />
      <View style={{flex: 1}}></View>
      <IconButton
        props={{
          name: 'shopping-cart',
          size: 25,
          color: Black,
          onPress: () => {
            navigation.navigate('Cart');
          },
        }}
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
