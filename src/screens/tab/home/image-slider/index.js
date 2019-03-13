import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Button } from 'native-base';
import Swiper from 'react-native-swiper';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';

const renderSlider = (details, idx) => {
  return (
    <TouchableOpacity style={{flex: 1}} key={idx} onPress={() => Linking.openURL(details.buttonlink)}>
      <Image source={{uri: details.image}} style={{ height: '100%', width: '100%' }} />
      {/* <View style={{ position: 'absolute', marginTop: 20, marginLeft: 50 }}>
        <Text style={{ fontSize: 25, color: '#fff' }}>{details.title}</Text>
        <Text style={{ fontSize: 20, color: '#fff', marginTop: 10 }}>{details.subtitle}</Text>
        <Button bordered rounded style={{ padding: 10, borderColor: '#fff' }} onPress={() => Linking.openURL(details.buttonlink)}>
          <Text style={{ fontSize: 20, color: '#fff', justifyContent: 'center', borderRadius: 100 }}>{details.buttontext}</Text>
        </Button>
      </View> */}
    </TouchableOpacity>
  );
};

class ImageSlider extends Component {
  state = {};

  render() {
    const { main } = this.props;
    return (
      <View style={{height: SCREEN_HEIGHT * 0.3, backgroundColor: '#000' }}>
        <Swiper
          showsButtons
          autoplay
          autoplayTimeout={2.5}
          autoplayDirection
        >
          {main.imageSlider.map((details, idx) => renderSlider(details, idx))}
        </Swiper>
      </View>
    );
  }
}

export default ImageSlider;
