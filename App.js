import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/Components/SignupScreen';
import SigninScreen from './src/Components/SigninScreen';
import VerifyEmailScreen from './src/Components/VerifyEmailScreen';
import Home from './src/Components/Home';
import Success from './src/Components/Success';
import TransitionImage from './src/Components/TransitionImage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="TransitionImage" component={TransitionImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

