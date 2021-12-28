import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
// Style
import style from '../Style/style';
import {Blue, White} from '../Style/color';
const Localstyle = StyleSheet.create({
  Container: {
    padding: 3,
  },
  Subcontainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 50,
  },
});
// Main Component.
const Button = ({props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress || (() => {})}
      style={Localstyle.Container}>
      <Text
        style={[
          style.Text,
          style.Desc,
          style.TextCenter,
          Localstyle.Subcontainer,
          {
            color: props.color || White,
            backgroundColor: props.bgcolor || Blue,
            width: props.width,
          },
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
const IconButton = ({props}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress || (() => {})}
      style={{
        backgroundColor: props.bgcolor || undefined,
        padding: 10,
        margin: 5,
      }}>
      <Icons
        name={props.name}
        size={props.size || 20}
        color={props.color || White}
      />
    </TouchableOpacity>
  );
};

export {Button, IconButton};
/**
 * Usage
 * <Button props={{text: 'some text here', width: x}} />
 * <IconButton
        props={{
          name: 'icon-name',
          size: x,
          color: x,
          onPress: () => {},
        }}
    />
 */
