/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, Text, View, Pressable, ImageBackground,
} from 'react-native';
import stateList from './states';
import Flag from '../assets/welcome.png';

const styles = StyleSheet.create({
  button: {
    borderColor: '#00001a',
    height: 100,
    width: 300,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,

    elevation: 4,
  },
  buttonText: {
    fontSize: 30,
    color: '#00001a',
  },
});

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: stateList,
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {/* <Text> What state do you live in?</Text> */}
        <ImageBackground source={Flag} style={{ flex: 1 }}>
          <View style={{
            flex: 1, justifyContent: 'center',
          }}
          >
            <Pressable
              onPress={() => navigation.navigate('Study', { name: 'Study' })}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.button,
              ]}
            >
              <Text style={styles.buttonText}>🍎  Study</Text>
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
              <Text style={styles.buttonText}>⏱️ Practice</Text>
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
        </ImageBackground>
      </View>
    );
  }
}

export default Welcome;
