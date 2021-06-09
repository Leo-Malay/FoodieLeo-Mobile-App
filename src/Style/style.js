import {StyleSheet} from 'react-native';
import {White, Black, Yellow} from './color';
export default style = StyleSheet.create({
  Container: {flex: 1},
  Text: {fontWeight: 'bold'},
  TextWhite: {color: White},
  TextBlack: {color: Black},
  TextYellow: {color: Yellow},
  SuperTitle: {fontSize: 40},
  Title: {fontSize: 30},
  Subtitle: {fontSize: 20},
  Desc: {fontSize: 15},
  TextCenter: {textAlign: 'center', textAlignVertical: 'center'},
  Inline: {flexDirection: 'row', flexWrap: 'wrap'},
  Center: {alignSelf: 'center'},
  Left: {alignSelf: 'flex-start'},
  Right: {alignSelf: 'flex-end'},
  screenBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  TextInput: {
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
  },
});
