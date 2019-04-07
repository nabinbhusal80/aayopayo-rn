import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'relative',
  },
  offlineText: { color: '#fff' },
});

class ShowInternetConnectionInfo extends PureComponent {
  state = {};

  componentDidMount() {
    const { updateFormValue } = this.props;
    NetInfo.getConnectionInfo().then((connnectionInfo) => {
      if (connnectionInfo.type === 'none') {
        updateFormValue('internetStatus', false);
      } else {
        updateFormValue('internetStatus', true);
      }
    });
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = (isConnected) => {
    const { updateFormValue } = this.props;
    updateFormValue('internetStatus', isConnected);
  };

  render() {
    const { registerForm } = this.props;
    if (!registerForm.internetStatus) {
      return (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      );
    }
    return null;
  }
}
ShowInternetConnectionInfo.propTypes = {
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};

export default ShowInternetConnectionInfo;
