import * as React from 'react';
import { Text, View, ScrollView, SafeAreaView, ImageBackground, StyleSheet, FlatList } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Blackboard from '../assets/blackboard.jpeg'

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

    return (
      <ScrollView style={{
        backgroundColor: 'ghostwhite',
        borderRadius: 10,
        height: 600,
        padding: 40,
        marginLeft: 25,
        marginRight: 25,
        textShadowColor: 'white', textShadowOffset: { width: 0.3, height: 0.3 }, textShadowRadius: 1
      }}>
        <Text style={{ fontSize: 12 }}>{item.heading}</Text>
        <Text style={{ fontSize: 12 }}>{item.subheading}</Text>
        <Text style={{ fontSize: 24, marginVertical: 20 }}>{item.question}</Text>
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
                layout={"tinder"}
                ref={ref => this.carousel = ref}
                data={questions}
                sliderWidth={400}
                itemWidth={415}
                renderItem={this._renderItem}
                onSnapToItem={index => this.setState({ activeIndex: index })} />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView >
    );
  }
}

export default Study;
