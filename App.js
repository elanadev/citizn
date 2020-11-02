import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import db from './firebase.config';

import Welcome from './components/Welcome';
import Second from './components/Second';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Second" component={Second} options={{ title: 'Second' }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </>
  );
};

export default App;
