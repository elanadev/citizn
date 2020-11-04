import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ImageBackground } from 'react-native';
import Blackboard from '../assets/blackboard.jpeg';
import { Autocomplete } from 'react-native-autocomplete-input';

import db from '../firebase.config';

const styles = StyleSheet.create({
  button: {
    borderColor: '#00001a',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 10,
    paddingVertical: 50,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 30,
    color: '#00001a'
  }
})

const Welcome = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text> What would you like to do?</Text>

    <View style={{ flex: 1, justifyContent: 'space-evenly', marginVertical: 70 }}>
      <Pressable
        onPress={() => navigation.navigate('Study', { name: 'Study' })}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'red',
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Study</Text>
        <ImageBackground source={Blackboard} style={{ flex: 1 }}></ImageBackground>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Practice', { name: 'Practice' })}
        style={styles.button}>
        <Text style={styles.buttonText}>Practice</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Quiz', { name: 'Quiz' })}
        style={styles.button}>
        <Text style={styles.buttonText}>Quiz</Text>
      </Pressable>

    </View>
  </SafeAreaView>
);

export default Welcome;
