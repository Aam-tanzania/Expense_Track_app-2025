import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav'; // Import the BottomNav component

const Budget = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.time}>9:41</Text>
          <Text style={styles.month}>May</Text>
        </View>

        {/* Shopping Budget */}
        <View style={styles.budgetSection}>
          <Text style={styles.budgetCategory}>Shopping</Text>
          <Text style={styles.budgetRemaining}>Remaining $0</Text>
          <View style={styles.budgetBar}>
            <View style={[styles.budgetProgress, { width: '100%', backgroundColor: '#ff4444' }]} />
          </View>
          <Text style={styles.budgetAmount}>$1200 of $1000</Text>
          <Text style={styles.budgetWarning}>You've exceeded the limit!</Text>
        </View>

        {/* Transportation Budget */}
        <View style={styles.budgetSection}>
          <Text style={styles.budgetCategory}>Transportation</Text>
          <Text style={styles.budgetRemaining}>Remaining $350</Text>
          <View style={styles.budgetBar}>
            <View style={[styles.budgetProgress, { width: '50%', backgroundColor: '#4CAF50' }]} />
          </View>
          <Text style={styles.budgetAmount}>$350 of $700</Text>
        </View>

        {/* Create a Budget Button */}
        <TouchableOpacity style={styles.createBudgetButton}>
          <Text style={styles.createBudgetButtonText}>Create a budget</Text>
        </TouchableOpacity>
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
  budgetSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  budgetCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  budgetRemaining: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  budgetBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  budgetProgress: {
    height: '100%',
    borderRadius: 5,
  },
  budgetAmount: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  budgetWarning: {
    fontSize: 14,
    color: '#ff4444',
    marginTop: 5,
  },
  createBudgetButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  createBudgetButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
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

export default Budget;