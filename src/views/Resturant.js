import React from 'react';
import {ActivityIndicator, Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
// Helper Component
import {ScreenHeader} from '../components/Header';
import ItemCard from '../components/ItemCard';
import {MenuErrorHandler} from '../components/ErrorHandler';
// Style
import General from '../Style/General';
const Resturant = ({navigation}) => {
  const {data, isLoading} = useSelector(state => state.menu);
  return (
    <View>
      <ScrollView>
        <ScreenHeader navigation={navigation} props={{name: 'Resturant'}} />
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        <Text style={General.PageHead}>Menu</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {data?.map((ele, j) => {
            return <ItemCard key={j} navigation={navigation} props={ele} />;
          })}
        </View>
      </ScrollView>
      <MenuErrorHandler />
    </View>
  );
};

export default Resturant;
