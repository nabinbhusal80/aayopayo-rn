import React, { Component } from 'react';
import { Animated } from 'react-native';
import { View, Text, Thumbnail } from 'native-base';
import { APP_COLOR } from '../../config';

class WelcomeScreen extends Component {
  state = { fadeAnim: new Animated.Value(0) };

  componentDidMount() {
    const { fadeAnim } = this.state;
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      },
    ).start();
  }

  render() {
    const { fadeAnim } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: APP_COLOR }}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Thumbnail style={{ height: 80, width: 300, marginRight: -20 }} source={require('../../../assets/brand.png')} />
        </Animated.View>
        <Text style={{ color: 'yellow', marginTop: 100 }}>Loading ...</Text>
      </View>
    );
  }
}
export default WelcomeScreen;
