import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Onboarding2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/money.png')} />
      <Text style={styles.title}>Know where your money goes</Text>
      <Text style={styles.subtitle}>
        Track your transaction easily, with categories and financial report
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding3')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Onboarding2;     