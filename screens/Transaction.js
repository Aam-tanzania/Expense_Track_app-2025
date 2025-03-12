import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav'; // Import the BottomNav component
import { Ionicons } from '@expo/vector-icons';
const Transaction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.time}>9:41</Text>
          <Text style={styles.month}>✔ Month</Text>
          <Text style={styles.reportTitle}>See your financial report</Text>
        </View>

        {/* Today's Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          <View style={styles.transaction}>
            <FontAwesome name="shopping-bag" size={20} color="#6200ee" />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionCategory}>Shopping</Text>
              <Text style={styles.transactionDescription}>Buy some grocery</Text>
            </View>
            <Text style={styles.transactionAmount}>- $120</Text>
            <Text style={styles.transactionTime}>10:00 AM</Text>
          </View>

          <View style={styles.transaction}>
            <Ionicons name="md-tv" size={20} color="#6200ee" />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionCategory}>Subscription</Text>
              <Text style={styles.transactionDescription}>Disney+ Annual..</Text>
            </View>
            <Text style={styles.transactionAmount}>- $80</Text>
            <Text style={styles.transactionTime}>03:30 PM</Text>
          </View>

          <View style={styles.transaction}>
            <MaterialIcons name="restaurant" size={20} color="#6200ee" />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionCategory}>Food</Text>
              <Text style={styles.transactionDescription}>Buy a ramen</Text>
            </View>
            <Text style={styles.transactionAmount}>- $32</Text>
            <Text style={styles.transactionTime}>07:30 PM</Text>
          </View>
        </View>

        {/* Yesterday's Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Yesterday</Text>
          <View style={styles.transaction}>
            <FontAwesome name="money" size={20} color="#4CAF50" />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionCategory}>Salary</Text>
              <Text style={styles.transactionDescription}>Salary for July</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: '#4CAF50' }]}>+ $5000</Text>
            <Text style={styles.transactionTime}>04:30 PM</Text>
          </View>

          <View style={styles.transaction}>
            <MaterialIcons name="directions-car" size={20} color="#6200ee" />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionCategory}>Transportation</Text>
              <Text style={styles.transactionDescription}>Charging Tesla</Text>
            </View>
            <Text style={styles.transactionAmount}>- $18</Text>
            <Text style={styles.transactionTime}>08:30 PM</Text>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation Bar */}
      <View style={styles.bottomNavContainer}>
        <BottomNav navigation={navigation} /> {/* Use the BottomNav component */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ee',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 50,
  },
  time: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  month: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
  reportTitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionCategory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  transactionAmount: {
    fontSize: 16,
    color: '#ff4444',
    marginLeft: 10,
  },
  transactionTime: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default Transaction;