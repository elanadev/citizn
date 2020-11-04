import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView, ImageBackground, StyleSheet, FlatList } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Blackboard from '../assets/blackboard.jpeg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';


class Study extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  _renderItem({ item, index }) {
    let capped = item.responses.map((str) => {
      str.trim()
      str = str[0].toUpperCase() + str.slice(1)
      return '📜  ' + str
    })

    const text = capped.join('\n')

    const leadingZero = (num) => { if (num < 10) { return `0${num}` } else { return `${num}` } }
    const audioUrl = `https://www.uscis.gov/sites/default/files/document/audio/Track%20${leadingZero(index + 1)}.mp3`

    const soundObject = new Audio.Sound();
    const playAudio = async (url) => {
      try {
        await soundObject.loadAsync({ uri: url });
        soundObject.setOnPlaybackStatusUpdate(async (status) => {
          if (status.didJustFinish === true) {
            // audio has finished!
            await soundObject.unloadAsync()
            console.log('unloaded')
          }
        })

        await soundObject.playAsync();

        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        console.log('hello from play audio')
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <ScrollView style={{
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        height: 600,
        padding: 40,
        marginLeft: 25,
        marginRight: 25,
        textShadowColor: 'blue', textShadowOffset: { width: 0.3, height: 0.3 }, textShadowRadius: 1
      }}>
        <TouchableOpacity
          onPress={() => playAudio(audioUrl)}
          style={{
            backgroundColor: 'transaparent',
            paddingVertical: 0,
            alignSelf: 'flex-end',
          }}
        >
          <Text style={{ fontSize: 20, color: '#fff' }}>🔊</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 12 }}>{item.heading}</Text>
        <Text style={{ fontSize: 12 }}>{item.subheading}</Text>
        <Text style={{ fontSize: 24, marginVertical: 20, textShadowColor: 'white', textShadowOffset: { width: 0.3, height: 0.3 }, textShadowRadius: 1 }}>{item.question}</Text>
        <Text style={{ fontSize: 16, lineHeight: 32 }}>{text}</Text>
      </ScrollView>
    )
  }

  render() {
    const { questions } = this.props

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50, }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <ImageBackground source={Blackboard} style={{ flex: 1 }}>

            <View style={{ marginTop: 50 }}>
              <Carousel
                layout={"stack"}
                ref={ref => this.carousel = ref}
                data={questions}
                sliderWidth={400}
                itemWidth={415}
                renderItem={this._renderItem}
                onSnapToItem={index => this.setState({ activeIndex: index })} />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

export default Study;
