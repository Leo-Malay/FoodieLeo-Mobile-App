import {StyleSheet} from 'react-native';
import {Black} from './color';
export default Auth = StyleSheet.create({
  BgImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    alignSelf: 'auto',
    resizeMode: 'cover',
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    paddingVertical: 25,
    paddingHorizontal: 5,
  },
  Card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    alignItems: 'center',
    paddingVertical: 20,
  },
  CardTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Black,
    paddingBottom: 20,
  },
  Input: {
    width: 300,
    height: 40,
    borderRadius: 30,
    borderWidth: 0.5,
    paddingHorizontal: 30,
    margin: 5,
  },
  SaluteContainer: {
    paddingTop: 20,
    marginTop: 30,
    borderTopWidth: 1,
    width: 300,
  },
  Salute: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Black,
    paddingBottom: 20,
    textAlign: 'center',
  },
});
