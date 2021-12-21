import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, ScrollView} from 'react-native';
import BrandCard from '../components/BrandCard';
// Helper Component
import {HomeHeader} from '../components/Header';
import {Menu} from '../redux/Actions/Menu';
import {Account} from '../redux/Actions/Auth';
// Style
import style from '../Style/style';
import {useDispatch, useSelector} from 'react-redux';
import {MenuErrorHandler} from '../components/ErrorHandler';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.auth);
  const {menu, isLoading} = useSelector(state => state.menu);
  useEffect(() => {
    if (data?.fname === undefined) dispatch(Account());
    if (menu === undefined)
      dispatch(Menu(data?.city, data?.state, data?.country));
  }, [Menu, data, menu]);

  const HomeStyle = StyleSheet.create({
    container: {backgroundColor: '#e6e6e6'},
  });
  return (
    <View style={[style.Container, HomeStyle.container]}>
      <HomeHeader
        navigation={navigation}
        props={{
          name: 'FoodieLeo',
        }}
      />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <ScrollView>
        {menu?.map((ele, i) => {
          return <BrandCard key={i} props={ele} navigation={navigation} />;
        })}
      </ScrollView>
      <MenuErrorHandler />
    </View>
  );
};

export default Home;
