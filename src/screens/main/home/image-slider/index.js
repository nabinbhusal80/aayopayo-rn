import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import { SCREEN_HEIGHT } from '../../../../config';

const renderSlider = (details, idx) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} key={idx} onPress={() => Linking.openURL(details.buttonlink)}>
      <Image source={{ uri: details.image }} style={{ height: '100%', width: '100%' }} />
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
ImageSlider.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
