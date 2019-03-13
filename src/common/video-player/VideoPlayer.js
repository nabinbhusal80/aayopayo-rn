import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Video from 'react-native-video-controls';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config';

const VideoPlayer = ({
  videoContent, shouldPlay, onPlaybackStatusUpdate, onLoadVideo, onReadyForDisplay, didJustFinish
}) => {
  return (
    <Video
      styles={styles.videoStyle}
      source={{ uri: videoContent.video }}
      resizeMode="contain"
      onEnd={() => didJustFinish()}
      disableVolume
      disableBack
    />
  );
};

VideoPlayer.propTypes = {
  videoContent: PropTypes.objectOf(PropTypes.any).isRequired,
  shouldPlay: PropTypes.bool.isRequired,
  onPlaybackStatusUpdate: PropTypes.func.isRequired,
  onLoadVideo: PropTypes.func.isRequired,
  onReadyForDisplay: PropTypes.func.isRequired,
};

export default VideoPlayer;

const styles = StyleSheet.create({
  videoStyle: {
    height: '50%',
    width: '90%',
    position: 'relative',
    alignSelf: 'center',
  },
});
