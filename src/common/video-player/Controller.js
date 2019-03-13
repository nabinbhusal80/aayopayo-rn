import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Slider from 'react-native-slider';

const Controller = ({ sliderValue, countDownValue }) => {
  return (
    <View style={styles.controllerContaintStyle}>
      <View style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text style={{ color: 'white', marginRight: 10 }}>{`${countDownValue} Sec`}</Text>
        <View style={styles.sliderStyle}>
          <Slider
            value={sliderValue}
            maximumTrackTintColor="#FFF"
            minimumTrackTintColor="orange"
            thumbStyle={{ width: null, height: null }}
            disabled={false}
          />
        </View>
      </View>
    </View>
  );
};

Controller.propTypes = {
  sliderValue: PropTypes.number.isRequired,
};

export default Controller;

const styles = StyleSheet.create({
  controllerContaintStyle: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  sliderStyle: {
    alignItems: 'stretch',
    flexGrow: 1,
  },
});
