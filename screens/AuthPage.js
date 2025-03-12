import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const AuthPage = () => {
  return (
    <ImageBackground
      source={require("../assets/background.png")} // Replace with your background image
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Skip Button */}
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>

        {/* Centered Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.title}>Smart Home App</Text>
          <Text style={styles.subtitle}>You are few clicks away to enter</Text>
          <Text style={styles.subtitle}>The world of smart home.</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  skipButton: {
    alignSelf: "flex-end",
    marginTop: 40,
    padding: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default AuthPage;
