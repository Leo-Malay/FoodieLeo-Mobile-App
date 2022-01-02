import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// Helper Component
import {HomeHeader} from '../components/Header';
import BrandCard from '../components/BrandCard';
import {MenuErrorHandler} from '../components/ErrorHandler';
// Request
import {Menu} from '../redux/Actions/Menu';
import {Account} from '../redux/Actions/Auth';
// Style
import General from '../Style/General';
import style from '../Style/style';
import {TextInput} from 'react-native-gesture-handler';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.auth);
  const {menu, isLoading} = useSelector(state => state.menu);
  useEffect(() => {
    if (data?.fname === undefined) dispatch(Account());
    if (data?.fname !== undefined && menu === undefined) {
      dispatch(Menu(data?.city, data?.state, data?.country));
    }
  }, [Menu, data, menu]);
  const [search, setSearch] = useState('');
  const HomeStyle = StyleSheet.create({
    container: {backgroundColor: '#e6e6e6'},
  });
  return (
    <View style={[style.Container, HomeStyle.container]}>
      <ScrollView>
        <HomeHeader
          navigation={navigation}
          props={{
            name: 'FoodieLeo',
          }}
        />
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        <Text style={General.PageHead}>Welcome,</Text>
        <Text style={General.PageSubHead}>Whats on your mind?</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={{
              paddingHorizontal: 25,
              paddingVertical: 2,
              marginVertical: 5,
              borderWidth: 0.1,
              borderRadius: 30,
              width: '90%',
              fontWeight: 'bold',
            }}
            placeholder="Pizza?"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </View>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 20,
          }}>
          Found Near You!
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {menu?.map((ele, i) => {
            return <BrandCard key={i} props={ele} navigation={navigation} />;
          })}
          {menu?.map((ele, i) => {
            return <BrandCard key={i} props={ele} navigation={navigation} />;
          })}
          {menu?.map((ele, i) => {
            return <BrandCard key={i} props={ele} navigation={navigation} />;
          })}
          {menu?.map((ele, i) => {
            return <BrandCard key={i} props={ele} navigation={navigation} />;
          })}
          {menu?.map((ele, i) => {
            return <BrandCard key={i} props={ele} navigation={navigation} />;
          })}
          {menu?.map((ele, i) => {
            return <BrandCard key={i} props={ele} navigation={navigation} />;
          })}
        </View>
      </ScrollView>
      <MenuErrorHandler />
    </View>
  );
};

export default Home;
