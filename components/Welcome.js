import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Blackboard from '../assets/blackboard.jpeg';
import stateList from './states'

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
  },
});

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: stateList,
      query: '',
      residentState: ''
    };
  }


  render() {
    const { navigation } = this.props

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Text> What state do you live in?</Text> */}

        <View style={{ flex: 1, justifyContent: 'space-evenly', marginVertical: 70 }}>
          <Pressable
            onPress={() => navigation.navigate('Study', { name: 'Study' })}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              styles.button,
            ]}
          >
            <Text style={styles.buttonText}>Study</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Practice', { name: 'Practice' })}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              styles.button,
            ]}
          >
            <Text style={styles.buttonText}>Practice</Text>
          </Pressable>

          {/* <Pressable
            onPress={() => navigation.navigate('Quiz', { name: 'Quiz' })}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              styles.button,
            ]}
          >
            <Text style={styles.buttonText}>Quiz</Text>
          </Pressable> */}

        </View>
      </SafeAreaView>
    )
  }
};



export default Welcome;
