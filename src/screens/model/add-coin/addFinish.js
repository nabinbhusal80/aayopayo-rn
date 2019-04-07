import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner, Button } from 'native-base';
import PropTypes from 'prop-types';
import { SCREEN_HEIGHT } from '../../../config';


const styles = StyleSheet.create({
  videoStyle: {
    height: SCREEN_HEIGHT * 0.4,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonStyle: {
    padding: 5,
    margin: 20,
  },
});

const CustomAddFinish = ({ modal, addCoinHandler, main }) => {
  const { addCoinSuccess } = modal;
  return (
    <View style={styles.videoStyle}>
      {addCoinSuccess
        ? (
          <View style={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <Text style={{ fontSize: 25, color: 'green' }}>Congrats !</Text>
            <Text style={{ color: 'green' }}>
              {`${main.userCurrentGetCoins} coins added in your account.`}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                success
                onPress={() => addCoinHandler()}
                style={[styles.buttonStyle]}
              >
                <Text style={{ color: 'white' }}>Get More Coins</Text>
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
  addCoinHandler: PropTypes.func.isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,

};
export default CustomAddFinish;
