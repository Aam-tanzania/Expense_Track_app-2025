import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Onboarding3 from './screens/Onboarding3';
import AuthPage from './screens/AuthPage'; 
import Home from './screens/Home';
import Transaction from './screens/Transaction';
import Budget from './screens/Budget';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Auth" component={AuthPage} />
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Transaction" component={Transaction} /> 
        <Stack.Screen name="Budget" component={Budget} /> 
        <Stack.Screen name="Profile" component={Profile} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;