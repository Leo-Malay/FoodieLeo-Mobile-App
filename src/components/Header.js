import React from 'react';
import {View, Text} from 'react-native';
// Helper Components
import {IconButton} from './Button';
// Style
import {Black} from '../Style/color';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
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
  const {cart} = useSelector(state => state.cart);
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
      <View>
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
        {cart && cart?.length > 0 && (
          <Text
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
              fontSize: 10,
              backgroundColor: '#f00',
              paddingHorizontal: 5,
              paddingVertical: 2,
              color: '#fff',
              borderRadius: 50,
            }}>
            {cart.length}
          </Text>
        )}
      </View>
    </View>
  );
};

export {ScreenHeader, HomeHeader};
/**
 *  Usage of the components
 *  <HomeHeader navigation={navigation} props={{name: 'title_screen'}} />
 *  <ScreenHeader navigation={navigation} props={{name: 'title_screen'}} />
 */
