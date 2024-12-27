import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

const TransitionImage = () => {
  const images = [
    require('../assets/image1.png'),
    require('../assets/image2.png'),
    require('../assets/image3.png'),
    require('../assets/image4.png'),
    require('../assets/image4.png'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade-out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Update the index and reset animation
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

        // Trigger fade-in animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start();
      });
    }, 6000); // Change image every 6 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images[currentIndex]}
        style={[styles.image, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Get Started Pressed!')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: '80%',
    height: '50%',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue', // Vibrant purple color
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Adds shadow on Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default TransitionImage;
