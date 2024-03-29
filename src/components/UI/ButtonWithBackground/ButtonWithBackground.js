import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform,
} from 'react-native';

const ButtonWithBackground = props => {
  const content = (
    <View
      style={[
        styles.button,
        props.color ? { backgroundColor: props.color } : null,
        props.disable ? styles.disabled : null,
      ]}
    >
      <Text style={props.disable ? styles.disabledText : null}>{props.children}</Text>
    </View>
  );

  if (props.disable) {
    return content;
  }

  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={props.onPress}>{content}</TouchableNativeFeedback>;
  }
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'purple',
  },
  disabled: {
    backgroundColor: '#eee',
    borderColor: '#aaa',
  },
  disabledText: {
    color: '#aaa',
  },
});

export default ButtonWithBackground;
