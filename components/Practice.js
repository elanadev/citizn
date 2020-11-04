/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Text, View, ScrollView, Pressable, SafeAreaView, ImageBackground, StyleSheet,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Collapsible from 'react-native-collapsible';
import Track from '../assets/track.jpeg';

const styles = StyleSheet.create({
  button: {
    borderColor: '#00001a',
    height: 40,
    width: 120,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#00001a',
  },
});

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      currentStart: 0,
      currentEnd: 5,
      isCollpased: true,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  _renderItem({ item, index }) {
    const capped = item.responses.map((str) => {
      const trimmed = str.trim();
      const capital = trimmed[0].toUpperCase() + trimmed.slice(1);
      return `📜  ${capital}`;
    });

    let isCollapsed = false;
    let responses = '';
    if (!isCollapsed) {
      responses = capped.join('\n');
    } else {
      responses = [''];
    }

    return (
      <ScrollView style={{
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        height: 600,
        padding: 40,
        marginLeft: 25,
        marginRight: 25,
        textShadowColor: 'blue',
        textShadowOffset: { width: 0.3, height: 0.3 },
        textShadowRadius: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
      }}
      >
        <Text style={{ fontSize: 12 }}>{item.heading}</Text>
        <Text style={{ fontSize: 12 }}>{item.subheading}</Text>
        <Text style={{
          fontSize: 24, marginVertical: 20, textShadowColor: 'white', textShadowOffset: { width: 0.3, height: 0.3 }, textShadowRadius: 1,
        }}
        >
          {item.question}
        </Text>
        <Pressable
          onPress={() => {
            isCollapsed = !isCollapsed;
            console.log(isCollapsed);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.button,
          ]}
        >
          <Text>Show Answer</Text>
        </Pressable>
        <Collapsible collapsed>
          <Text style={{ fontSize: 16, lineHeight: 32 }}>{responses}</Text>
        </Collapsible>
      </ScrollView>
    );
  }

  render() {
    const { questions } = this.props;
    let { currentStart, currentEnd } = this.state;
    const current = questions.slice(currentStart, currentEnd);

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <ImageBackground source={Track} style={{ flex: 1 }}>

            <View style={{ marginTop: 50 }}>
              <Carousel
                loop
                layout="stack"
                ref={(ref) => this.carousel = ref}
                data={current}
                sliderWidth={400}
                itemWidth={415}
                renderItem={this._renderItem}
                onSnapToItem={(index) => this.setState({ activeIndex: index, isCollapsed: true })}
              />
            </View>

            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 26, marginVertical: 30,
            }}
            >
              <Pressable
                onPress={() => {
                  if (currentStart > 0) {
                    this.setState({ currentStart: currentStart -= 5, currentEnd: currentEnd -= 5, activeIndex: 0 });
                  }
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                  },
                  styles.button,
                ]}
              >
                <Text>Last 5</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  if (currentStart < 95) {
                    this.setState({ currentStart: currentStart += 5, currentEnd: currentEnd += 5, activeIndex: 0 });
                  }
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                  },
                  styles.button,
                ]}
              >
                <Text>Next 5</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
        <View />
      </SafeAreaView>
    );
  }
}

export default Practice;
