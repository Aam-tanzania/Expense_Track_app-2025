import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'; // Import icons

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Text style={styles.time}>9:41</Text> */}
        <Text style={styles.month}>October</Text>
        <Text style={styles.balance}>Account Balance</Text>
        <Text style={styles.amount}>$9400</Text>
      </View>

      {/* Income and Expenses */}
      <View style={styles.incomeExpenses}>
        <View style={styles.income}>
          <MaterialIcons name="arrow-upward" size={24} color="#fff" />
          <Text style={styles.label}>Income</Text>
          <Text style={styles.value}>$5000</Text>
        </View>
        <View style={styles.expenses}>
          <MaterialIcons name="arrow-downward" size={24} color="#fff" />
          <Text style={styles.label}>Expenses</Text>
          <Text style={styles.value}>$1200</Text>
        </View>
      </View>

      {/* Spend Frequency */}
      <View style={styles.spendFrequency}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Year</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Transactions */}
      <ScrollView style={styles.transactions}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Recent Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Transaction List */}
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
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="#6200ee" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="list-alt" size={24} color="#666" />
          <Text style={styles.navText}>Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="pie-chart" size={24} color="#666" />
          <Text style={styles.navText}>Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="user" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flex:1,
    alignItems: 'center',
    padding: 0,
    // backgroundColor: '#FBF2E9',
    backgroundColor: '#FF8F00',
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
    color: '#202',
    marginTop: 5,
  },
  balance: {
    fontSize: 16,
    color: '#0002020',
    marginTop: 10,
  },
  amount: {
    fontSize: 60,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  incomeExpenses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  income: {
    alignItems: 'center',
    backgroundColor: 'green',
    width: 150,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    
    
  },
  expenses: {
    alignItems: 'center',
    backgroundColor: 'red',
    width: 150,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
  spendFrequency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  tab: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  transactions: {
    flex: 1,
    padding: 20,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 16,
    color: '#FBF2E9',
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
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});

export default Home;