import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Second = () => (
  <View style={styles.container}>
    <Text>Hi! I am the second page. You got here!</Text>
  </View>
);

export default Second;
