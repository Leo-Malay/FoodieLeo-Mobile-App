import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
// Helper Component
import ItemCard from './ItemCard';
import Menu from '../data/Menu.json';
// Style
import style from '../Style/style';
const Localstyle = StyleSheet.create({
  Container: {paddingVertical: 20},
  Title: {
    fontSize: 25,
    paddingHorizontal: 10,
  },
});
// Main Component
const Section = ({navigation, props}) => {
  return (
    <View style={Localstyle.Container}>
      <Text
        style={[
          style.Subtitle,
          style.Text,
          style.BlackText,
          {paddingHorizontal: 10, paddingVertical: 5},
        ]}>
        {props.title}
      </Text>
      <ScrollView horizontal>
        {Menu.map(ele => {
          if (ele.type == props.type) {
            return (
              <ItemCard
                key={ele.type + ele.uid}
                navigation={navigation}
                props={ele}
              />
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default Section;
