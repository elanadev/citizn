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

const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Its working!</Text>

    <TouchableOpacity
      onPress={() => navigation.navigate('Second', { name: 'Second' })}
      style={{
        backgroundColor: 'black',
      }}
    >
      <Text style={{ fontSize: 20, color: '#fff' }}>Click me to go to the next page</Text>
    </TouchableOpacity>
  </View>
);

export default Welcome;
