import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Video from 'react-native-video-controls';

const styles = StyleSheet.create({
  videoStyle: {
    height: '50%',
    width: '90%',
    position: 'relative',
    alignSelf: 'center',
  },
});

const VideoPlayer = ({
  videoContent, didJustFinish,
}) => (
  <Video
    styles={styles.videoStyle}
    source={{ uri: videoContent.video }}
    resizeMode="contain"
    onEnd={() => didJustFinish()}
    disableVolume
    disableBack
    disablePlayPause
  />
);

VideoPlayer.propTypes = {
  videoContent: PropTypes.objectOf(PropTypes.any).isRequired,
  didJustFinish: PropTypes.func.isRequired,
};

export default VideoPlayer;
