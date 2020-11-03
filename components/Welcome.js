import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import db from '../firebase.config';

const Welcome = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text> What would you like to do?</Text>

    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Study', { name: 'Study' })}
        style={{
          backgroundColor: 'black',
          paddingVertical: 50,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Study</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Practice', { name: 'Practice' })}
        style={{
          backgroundColor: 'blue',
          paddingVertical: 50,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Practice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz', { name: 'Quiz' })}
        style={{
          backgroundColor: 'red',
          paddingVertical: 50,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Quiz</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default Welcome;
