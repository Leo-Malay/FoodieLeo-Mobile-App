import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
// Helper Component
import {ScreenHeader} from '../components/Header';
import ItemCard from '../components/ItemCard';
// Style
import style from '../Style/style';
import {useSelector} from 'react-redux';
import {MenuErrorHandler} from '../components/ErrorHandler';
const Resturant = ({navigation}) => {
  const {data, isLoading} = useSelector(state => state.menu);
  const HomeStyle = StyleSheet.create({
    container: {backgroundColor: '#e6e6e6'},
  });
  return (
    <View style={[style.Container, HomeStyle.container]}>
      <ScreenHeader navigation={navigation} props={{name: 'Resturant'}} />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <ScrollView>
        {data?.map((ele, j) => {
          return <ItemCard key={j} navigation={navigation} props={ele} />;
        })}
      </ScrollView>
      <MenuErrorHandler />
    </View>
  );
};

export default Resturant;
