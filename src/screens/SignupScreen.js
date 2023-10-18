import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextInputField from '../components/TextInputField';

const SignupScreen = ({ navigation}) => {
  const [username, setUsername] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = () => {
    // Logic to handle signup
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInputField placeholder="First Name" value={firstname} onChangeText={setfirstname} />
      <TextInputField placeholder="Last Name" value={lastname} onChangeText={setlastname} />
      <TextInputField placeholder="Email" value={email} onChangeText={setEmail} />

      <TextInputField placeholder="Username" value={username} onChangeText={setUsername} secureTextEntry/>
      <TextInputField placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Signup" onPress={handleSignup} />
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

export default SignupScreen;
