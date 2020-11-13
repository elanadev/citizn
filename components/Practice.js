/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Text, View, ScrollView, Pressable, SafeAreaView, ImageBackground, StyleSheet,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
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
  view: {
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
  },
});

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      currentStart: 0,
      currentEnd: 5,
      isCollapsed: true,
    };

    this._renderItem = this._renderItem.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  _renderItem({ item }) {
    const { isCollapsed } = this.state;

    const capped = item.responses.map((str) => {
      const trimmed = str.trim();
      const capital = trimmed[0].toUpperCase() + trimmed.slice(1);
      return `📜  ${capital}`;
    });

    const responses = capped.join('\n');

    return (
      <ScrollView style={styles.view}>
        <Text style={{ fontSize: 12 }}>{item.heading}</Text>
        <Text style={{ fontSize: 12 }}>{item.subheading}</Text>
        <Text style={{
          fontSize: 24, marginVertical: 20, textShadowColor: 'white', textShadowOffset: { width: 0.3, height: 0.3 }, textShadowRadius: 1,
        }}
        >
          {item.question}
        </Text>
        {
          !isCollapsed ? <Text style={{ fontSize: 16, lineHeight: 32 }}>{responses}</Text> : null
        }
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
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 26, marginVertical: 15,
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

            <View>
              <Carousel
                loop
                layout="stack"
                // eslint-disable-next-line no-return-assign
                ref={(ref) => this.carousel = ref}
                data={current}
                sliderWidth={400}
                itemWidth={415}
                renderItem={this._renderItem}
                activeSlideOffset={1}
                swipeThreshold={1}
                onBeforeSnapToItem={(index) => this.setState({ activeIndex: index, isCollapsed: true })}
              // onSnapToItem={(index) => this.setState({ activeIndex: index, isCollapsed: true })}
              />
            </View>
            <View style={{
              flexDirection: 'row', justifyContent: 'center', marginVertical: 20,
            }}
            >
              <Pressable
                onPressIn={() => {
                  this.setState({ isCollapsed: false });
                }}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                  },
                  styles.button,
                ]}
                onPressOut={() => {
                  this.setState({ isCollapsed: true });
                }}
              >
                <Text>Show Answer</Text>
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
