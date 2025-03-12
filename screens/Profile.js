import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav'; // Import the BottomNav component

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer}>
        {/* Header with Profile Picture */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../assets/profile.webp')} // Replace with your profile picture
              style={styles.profilePicture}
            />
            <Text style={styles.username}>Iriana Saliha</Text>
            <Text style={styles.userEmail}>iriana.saliha@studypalm.com</Text>
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionIcon}>
              <MaterialIcons name="settings" size={24} color="#6200ee" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Settings</Text>
              <Text style={styles.optionSubText}>Account, notifications, privacy</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionIcon}>
              <FontAwesome name="cloud-download" size={24} color="#6200ee" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Export Data</Text>
              <Text style={styles.optionSubText}>Download your data</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.optionIcon}>
              <Ionicons name="log-out" size={24} color="#ff4444" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Logout</Text>
              <Text style={styles.optionSubText}>Sign out of your account</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#666" />
          </TouchableOpacity>
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
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionIcon: {
    width: 40,
    alignItems: 'center',
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  optionSubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
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

export default Profile;