import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ placeholder, ...props }) => (
  <TextInput style={styles.input} placeholder={placeholder} {...props} />
);

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
  },
});

export default TextInputField;
