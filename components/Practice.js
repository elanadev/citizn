import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Practice = () => (
  <View style={styles.container}>
    <Text>Hi! I am the Practice page. You got here!</Text>
  </View>
);

export default Practice;
