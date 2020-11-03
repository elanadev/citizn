import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Quiz = () => (
  <View style={styles.container}>
    <Text>Hi! I am the Quiz page. You got here!</Text>
  </View>
);

export default Quiz;
