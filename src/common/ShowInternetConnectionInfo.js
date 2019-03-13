import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet, ToastAndroid } from 'react-native';

const { width } = Dimensions.get('window');
class ShowInternetConnectionInfo extends PureComponent {
  state = {};

  componentWillMount() {
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
    // ToastAndroid.show(JSON.stringify(isConnected), ToastAndroid.SHORT);
    updateFormValue('internetStatus', isConnected);
  };

  render() {
    // console.log('props in CheckInternet Connetion', this.props);
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

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
  },
  offlineText: { color: '#fff' }
});

export default ShowInternetConnectionInfo;
