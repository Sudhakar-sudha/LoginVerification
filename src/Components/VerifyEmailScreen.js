import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const VerifyEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResendVerification = async () => {
    if (!email) {
      setMessage('Please provide your email address.');
      return;
    }

    try {
      // Call the resend verification endpoint
      const response = await axios.post('https://project-tptk.onrender.com/user/resend', { email });
      // const response = await axios.post('http://192.168.117.199:3000/user/resend', { email });

      // Handle the response from the server
      if (response.data.status === 'Success') {
        setMessage('Verification email resent successfully.');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage('Error occurred while resending verification email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resend Verification Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <Button title="Resend Verification" onPress={handleResendVerification} />
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

export default VerifyEmailScreen;
