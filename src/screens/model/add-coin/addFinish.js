import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner, Button } from 'native-base';
import PropTypes from 'prop-types';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config';

const CustomAddFinish = ({ modal, updateModalValue, addCoinHandler }) => {
  // console.log('props in addFinish', props);
  const { addCoinSuccess } = modal;
  return (
    <View style={styles.videoStyle}>
      {addCoinSuccess
        ? (
          <View style={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <Text style={{ fontSize: 25, color: 'green' }}>Congrats !</Text>
            <Text style={{ color: 'green' }}> 15 coins added in your account.</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                success
                onPress={() => addCoinHandler()}
                style={[styles.buttonStyle]}
              >
                <Text style={{ color: 'white' }}>Get More Coins</Text>
              </Button>
              <Button
                danger
                onPress={() => updateModalValue('modalAddCoinShow', false)}
                style={[styles.buttonStyle]}
              >
                <Text style={{ color: 'white' }}>Close</Text>
              </Button>
            </View>
          </View>
        )
        : <Spinner size="large" />
    }
    </View>
  );
};

CustomAddFinish.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
export default CustomAddFinish;

const styles = StyleSheet.create({
  videoStyle: {
    height: SCREEN_HEIGHT * 0.4,
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 5,
    margin: 20,
  },
});
