import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Signup"
                    onPress={() => navigation.navigate('Signup')} // Navigate to Signup screen
                    color="#4CAF50" // Green color for the button
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Signin"
                    onPress={() => navigation.navigate('Signin')} // Navigate to Signin screen
                    color="#2196F3" // Blue color for the button
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Verify Email"
                    onPress={() => navigation.navigate('VerifyEmail')} // Navigate to VerifyEmail screen
                    color="#FF9800" // Orange color for the button
                />
            </View>
        </View>
    );
};

// Styling for the Home screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5', // Light background color
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
        textAlign: 'center',
    },
    buttonContainer: {
        marginBottom: 20, // Spacing between buttons
        width: '80%', // Buttons take up 80% of the width
    },
});

export default Home;
