import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Importing Views.
import Account from './src/views/Account';
import Cart from './src/views/Cart';
import Home from './src/views/Home';
import Item from './src/views/Item';
import Welcome from './src/views/Welcome';
import Login from './src/views/Login';
import Logout from './src/views/Logout';
import NewAccount from './src/views/NewAccount';
import {Provider} from 'react-redux';
import Store from './store';
// Making instance.
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Draw = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Drawer"
            component={Draw}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Item"
            component={Item}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewAccount"
            component={NewAccount}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
