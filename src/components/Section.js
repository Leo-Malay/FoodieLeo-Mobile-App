import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
// Helper Component
import ItemCard from './ItemCard';
// Style
import style from '../Style/style';
import {useDispatch, useSelector} from 'react-redux';
import {Product} from '../redux/Actions/Menu';
const Localstyle = StyleSheet.create({
  Container: {paddingVertical: 20},
  Title: {
    fontSize: 25,
    paddingHorizontal: 10,
  },
});
// Main Component
const Section = ({navigation, props}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.menu);
  const [menu, setMenu] = useState([]);
  useEffect(async () => {
    await setMenu(await dispatch(Product(props.soldBy)));
  }, [data, menu, dispatch]);
  console.log(menu);
  return (
    <View style={Localstyle.Container}>
      <Text
        style={[
          style.Subtitle,
          style.Text,
          style.BlackText,
          {paddingHorizontal: 10, paddingVertical: 5},
        ]}>
        {props.name}
      </Text>
      <ScrollView horizontal>
        {menu?.map((ele, j) => {
          return <ItemCard key={j} navigation={navigation} props={ele} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Section;
