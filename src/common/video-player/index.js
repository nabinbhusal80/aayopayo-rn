import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Text, Spinner } from 'native-base';
import Video from './VideoPlayer';

const styles = StyleSheet.create({
  videoContainerSyle: {
    backgroundColor: '#000',
    position: 'relative',
    width: '100%',
    height: '90%',
  },
  iconStyle: {
    color: 'orange',
    fontSize: 60,
  },
});

class VideoPlayer extends Component {
  state = {
    didJustFinish: false,
    addCoinProgressBar: false,
  };

  didJustFinishHandler = () => {
    this.setState({ didJustFinish: true });
  }

  getCoinHelper = (addCoinSuccess) => {
    this.setState({
      addCoinProgressBar: true,
      didJustFinish: false,
    });
    addCoinSuccess();
  }

  render() {
    const { didJustFinish, addCoinProgressBar } = this.state;
    const { modal, addCoinSuccess } = this.props;
    return (
      <View style={styles.videoContainerSyle}>
        {modal.videoContent.video
        && (
        <Video
          didJustFinish={this.didJustFinishHandler}
          videoContent={modal.videoContent}
        />
        )}
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        >
          {didJustFinish ? (
            <View style={styles.iconStyle}>
              <Button style={{ backgroundColor: 'orange' }} onPress={() => this.getCoinHelper(addCoinSuccess)}>
                <Text> Get Coin</Text>
              </Button>
            </View>
          )
            : null
          }
          {
            addCoinProgressBar ? <Spinner size="large" color="green" /> : null
          }
        </View>
      </View>
    );
  }
}
export default VideoPlayer;

VideoPlayer.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  addCoinSuccess: PropTypes.func.isRequired,
};
