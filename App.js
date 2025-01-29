// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SignupScreen from './src/Components/SignupScreen';
// import SigninScreen from './src/Components/SigninScreen';
// import VerifyEmailScreen from './src/Components/VerifyEmailScreen';
// import Home from './src/Components/Home';
// import Success from './src/Components/Success';
// import TransitionImage from './src/Components/TransitionImage';
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         <Stack.Screen name="Signin" component={SigninScreen} />
//         <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Success" component={Success} />
//         <Stack.Screen name="TransitionImage" component={TransitionImage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/Components/SignupScreen';
import SigninScreen from './src/Components/SigninScreen';
import VerifyEmailScreen from './src/Components/VerifyEmailScreen';
import Home from './src/Components/Home';
import Success from './src/Components/Success';
import TransitionImage from './src/Components/TransitionImage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.title}>Welcome to Our App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AuthSelection')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const AuthSelectionScreen = ({ navigation }) => {
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.title}>Choose an Option</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signin')}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [initialRoute, setInitialRoute] = React.useState(null);

  React.useEffect(() => {
    const checkAsyncStorage = async () => {
      const hasSeenTransition = await AsyncStorage.getItem('hasSeenTransition');
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

      if (isLoggedIn === 'true') {
        setInitialRoute('Home');
      } else if (hasSeenTransition === 'true') {
        setInitialRoute('Signin');
      } else {
        setInitialRoute('TransitionImage');
      }
    };

    checkAsyncStorage();
  }, []);

  if (!initialRoute) {
    return null; // Add a loading spinner if necessary
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="AuthSelection" component={AuthSelectionScreen} />
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

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
