import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NetInfo, Alert } from 'native-base';
import TabScreen from './tab/home';
import * as actions from '../actions';
import { getAsyncData, multiGetAsync } from '../common/AsycstrorageAaayopayo';
import WelcomeScreen from './welcome-screen';

class index extends Component {
  static navigationOptions = {
    header: null,
    internetStatus: true,
  }

  state={ renderMain: true };

  async componentWillMount() {
    const { updateFormValue, fetchProduct, updateMainValue, updateModalValue } = this.props;
    const localStorage = await getAsyncData('LIVE_PRODUCTS'); // 'CLOSED_PRODUCTS', 'FEATURED_PRODUCTS', 'UPCOMING_PRODUCTS', 'IMGAE_SLIDER']);
    console.log('local storage products', JSON.parse(localStorage));
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

    // const screenOrientationlandScape = await ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
    // const screenOrientationPortrait =  await ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
    // console.log('orientation', screenOrientationPortrait, screenOrientationlandScape);
    this.setState({ renderMain: false });
    // NetInfo.getConnectionInfo().then(async (connnectionInfo) => {
    //   if (connnectionInfo.type === 'none') {
    //     this.setState({ internetStatus: false });
    //     Alert.alert('No internet connection please check your internet settings');
    //   } else {
    //     this.setState({ internetStatus: true });
    //   }
    // });
    // NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = (isConnected) => {
    console.log('is internet connected', isConnected);
    if (isConnected === 'none') {
      Alert.alert('No internet connection please check your internet settings');
    }
  };

  objectParseHelper = arr => JSON.parse(arr).map(obj => JSON.parse(obj));

  render() {
    const { renderMain, internetStatus } = this.state;
    if (renderMain) {
      return <WelcomeScreen {...this.props} />;
    }
    return (
      <TabScreen {...this.props} />
    );
  }
}

const mapStateToProps = ({ registerForm }) => registerForm;

export default connect(mapStateToProps, { ...actions })(index);
