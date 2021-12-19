import React from 'react';
import {View, StyleSheet} from 'react-native';
// Style
import {Red, Green} from '../Style/color';
const Localstyle = StyleSheet.create({
  Container: {
    margin: 4,
    padding: 2,
    borderWidth: 2,
    width: 15,
    height: 15,
  },
  Subcontainer: {
    padding: 0.5,
    margin: 0.5,
    borderRadius: 50,
    width: 6,
    height: 6,
  },
});
// Main Component
const Veg = () => {
  return (
    <View style={[Localstyle.Container, style.Center, {borderColor: Green}]}>
      <View style={[Localstyle.Subcontainer, {backgroundColor: Green}]}></View>
    </View>
  );
};
const NonVeg = () => {
  return (
    <View style={[Localstyle.Container, style.Center, {borderColor: Red}]}>
      <View style={[Localstyle.Subcontainer, {backgroundColor: Red}]}></View>
    </View>
  );
};
export {Veg, NonVeg};
