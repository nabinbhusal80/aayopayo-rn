import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTyeps from 'prop-types';
import { NetInfo, Alert } from 'react-native';
import TabScreen from './main/home';
import * as actions from '../actions';
import { getAsyncData } from '../common/AsycstrorageAaayopayo';
import WelcomeScreen from './welcome-screen';

class index extends Component {
  static navigationOptions = {
    header: null,
  }

  state={ renderMain: true, internetStatus: true };

  async componentWillMount() {
    NetInfo.getConnectionInfo().then(async (connnectionInfo) => {
      if (connnectionInfo.type === 'none') {
        this.setState({ internetStatus: false });
        Alert.alert('No internet connection please check your internet settings');
      } else {
        await this.fetchInitialData();
        this.setState({ internetStatus: true });
      }
    });
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = async (isConnected) => {
    if (isConnected === 'none') {
      this.setState({ internetStatus: false });
      Alert.alert('No internet connection please check your internet settings');
    } else {
      await this.fetchInitialData();
      this.setState({ internetStatus: true });
    }
  };

  fetchInitialData = async () => {
    const { updateFormValue, fetchProduct, updateMainValue, updateModalValue } = this.props;
    await fetchProduct();
    const loginStatus = await getAsyncData('LOGIN_STATUS');
    const loginId = await getAsyncData('USER_ID');
    const userName = await getAsyncData('USER_NAME');
    const userEmail = await getAsyncData('USER_EMAIL');
    const userPhone = await getAsyncData('USER_PHONE');
    const userCoins = await getAsyncData('USER_COINS');
    const cvid = await getAsyncData('NEXT_ADD_VIDEO');
    if (loginStatus === 'true' && loginId) {
      updateMainValue('userCoins', userCoins);
      updateFormValue('loginStatus', true);
      updateMainValue('userId', { name: userName, email: userEmail, id: loginId, phoneNo: userPhone });
      updateFormValue('full_name', userName);
      updateFormValue('email', userEmail);
      updateModalValue('videoContent', { cvid });
    } else {
      updateFormValue('loginStatus', false);
    }
    this.setState({ renderMain: false });
  }

  objectParseHelper = arr => JSON.parse(arr).map(obj => JSON.parse(obj));

  render() {
    const { renderMain, internetStatus } = this.state;
    if (renderMain || !internetStatus) {
      return <WelcomeScreen {...this.props} />;
    }
    return (
      <TabScreen {...this.props} />
    );
  }
}

index.propTypes = {
  updateFormValue: PropTyeps.func.isRequired,
  fetchProduct: PropTyeps.func.isRequired,
  updateMainValue: PropTyeps.func.isRequired,
  updateModalValue: PropTyeps.func.isRequired,
};

const mapStateToProps = ({ registerForm }) => registerForm;

export default connect(mapStateToProps, { ...actions })(index);
