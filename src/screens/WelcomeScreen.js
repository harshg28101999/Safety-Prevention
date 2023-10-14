import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
