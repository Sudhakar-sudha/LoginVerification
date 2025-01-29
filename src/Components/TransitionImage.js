// import React, { useEffect, useRef, useState } from 'react';
// import { View, Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

// const TransitionImage = () => {
//   const images = [
//     require('../assets/image1.png'),
//     require('../assets/image2.png'),
//     require('../assets/image3.png'),
//     require('../assets/image4.png'),
//     require('../assets/image4.png'),
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const fadeAnim = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Trigger fade-out animation
//       Animated.timing(fadeAnim, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: true,
//       }).start(() => {
//         // Update the index and reset animation
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

//         // Trigger fade-in animation
//         Animated.timing(fadeAnim, {
//           toValue: 1,
//           duration: 600,
//           useNativeDriver: true,
//         }).start();
//       });
//     }, 3000); // Change image every 6 seconds

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, [fadeAnim]);

//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         source={images[currentIndex]}
//         style={[styles.image, { opacity: fadeAnim }]}
//         resizeMode="contain"
//       />
//       <TouchableOpacity style={styles.button} onPress={() => alert('Get Started Pressed!')}>
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   image: {
//     width: '80%',
//     height: '50%',
//     marginBottom: 20,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: 'blue', // Vibrant purple color
//     borderRadius: 25,
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5, // Adds shadow on Android
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });

// export default TransitionImage;


import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const TransitionImage = ({ navigation }) => {
  const images = [
    require('../assets/image1.png'),
    require('../assets/image2.png'),
    require('../assets/image3.png'),
    require('../assets/image4.png'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  const handleGetStarted = async () => {
    await AsyncStorage.setItem('hasSeenTransition', 'true');
    navigation.replace('Signin');
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images[currentIndex]}
        style={[styles.image, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};


const SignupScreen = () => (
  <View style={styles.centeredContainer}>
    <Text>Signup Screen</Text>
  </View>
);

const SigninScreen = ({ navigation }) => {
  const handleLogin = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    navigation.replace('Home');
  };

  return (
    <View style={styles.centeredContainer}>
      <Text>Signin Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const VerifyEmailScreen = () => (
  <View style={styles.centeredContainer}>
    <Text>Verify Email Screen</Text>
  </View>
);

const Home = () => (
  <View style={styles.centeredContainer}>
    <Text>Home Screen</Text>
  </View>
);

const Success = () => (
  <View style={styles.centeredContainer}>
    <Text>Success Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '50%',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});


export default TransitionImage;