import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignin = async () => {
    if (!email || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.156.30:3000/user/signin', {
        email,
        password,
      });

      if (response.data.status === 'Success') {
        setMessage('Signin successful!');
        // Navigate to a home screen or dashboard after successful signin
        navigation.navigate('Home');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('Error occurred during signin.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signin</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <Button title="Sign In" onPress={handleSignin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  message: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SigninScreen;
