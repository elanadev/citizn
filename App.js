import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import db from './firebase.config';

import Welcome from './components/Welcome';
import Study from './components/Study';
import Practice from './components/Practice';
import Quiz from './components/Quiz';

const Stack = createStackNavigator();

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    db.ref('questions/').once('value', (snapshot) => {
      let results = snapshot.val()
      setQuestions(results)
    });
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Study" options={{ title: 'Study' }}>
            {props => <Study questions={questions} />}
          </Stack.Screen>
          <Stack.Screen name="Practice" component={Practice} options={{ title: 'Practice' }} />
          <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </>
  );
};

export default App;
