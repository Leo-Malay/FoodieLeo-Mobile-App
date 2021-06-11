import AsyncStorage from '@react-native-async-storage/async-storage';

async function Menu() {
  try {
    const menu = await AsyncStorage.getItem('menu');
    return JSON.parse(menu);
  } catch (err) {
    throw err;
  }
}

export default Menu;
