/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import * as React from 'react';
import {
  Text, View, ScrollView, SafeAreaView, ImageBackground,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';
import Blackboard from '../assets/blackboard2.jpeg';

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  _renderItem({ item, index }) {
    const capped = item.responses.map((str) => {
      const trimmed = str.trim();
      const capital = trimmed[0].toUpperCase() + trimmed.slice(1);
      return `📜  ${capital}`;
    });

    const responses = capped.join('\n');

    const leadingZero = (num) => { if (num < 10) { return `0${num}`; } return `${num}`; };
    const audioUrl = `https://www.uscis.gov/sites/default/files/document/audio/Track%20${leadingZero(index + 1)}.mp3`;

    const soundObject = new Audio.Sound();
    const playAudio = async (url) => {
      try {
        await soundObject.loadAsync({ uri: url });
        soundObject.setOnPlaybackStatusUpdate(async (status) => {
          if (status.didJustFinish === true) {
            // audio has finished!
            await soundObject.unloadAsync();
            console.log('unloaded');
          }
        });

        await soundObject.playAsync();

        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        console.log('hello from play audio');
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <ScrollView style={{
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        height: 700,
        padding: 30,
        marginHorizontal: 25,
        textShadowColor: 'blue',
        textShadowOffset: { width: 0.3, height: 0.3 },
        textShadowRadius: 1,
      }}
      >
        <TouchableOpacity
          onPress={() => playAudio(audioUrl)}
          style={{
            backgroundColor: 'transaparent',
            paddingVertical: 0,
            alignSelf: 'flex-end',
          }}
        >
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Text style={{ fontSize: 26, color: '#fff' }}>🔊</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 12 }}>{item.heading}</Text>
        <Text style={{ fontSize: 12 }}>{item.subheading}</Text>
        <Text style={{
          fontSize: 24, marginVertical: 20, textShadowColor: 'white', textShadowOffset: { width: 0.3, height: 0.3 }, textShadowRadius: 1,
        }}
        >
          {item.question}
        </Text>
        <Text style={{ fontSize: 16, lineHeight: 32 }}>{responses}</Text>
      </ScrollView>
    );
  }

  render() {
    const { questions } = this.props;

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <ImageBackground source={Blackboard} style={{ flex: 1 }}>

            <View style={{ marginTop: 30 }}>
              <Carousel
                layout="default"
                ref={(ref) => this.carousel = ref}
                data={questions}
                sliderWidth={400}
                itemWidth={415}
                renderItem={this._renderItem}
                onSnapToItem={(index) => this.setState({ activeIndex: index })}
              />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

export default Study;
