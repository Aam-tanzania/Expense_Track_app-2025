import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit'; // Import the chart library
import BottomNav from '../components/BottomNav'; // Import the BottomNav component

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
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

        {/* Graph Chart */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Spending Trend</Text>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [5000, 4500, 4800, 4600, 4700, 4900],
                },
              ],
            }}
            width={Dimensions.get('window').width - 40} // Chart width
            height={220} // Chart height
            yAxisLabel="$"
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#6200ee',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
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
        <View style={styles.transactions}>
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
    flex: 1,
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#FF8F00',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 50,
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
  chartContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default Home;