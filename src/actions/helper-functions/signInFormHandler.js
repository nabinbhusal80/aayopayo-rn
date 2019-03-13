import axios from 'axios';
import querystring from 'querystring';
import { setAsyncData, multiSetAsync, updateAsyncData } from '../../common/AsycstrorageAaayopayo';
import { BASE_URL } from '../../config';
import { fetchCoins, fetchNotifications } from '../index';

export const signInButtonPressHandler = async (state, dispatch, navigation, updateFormValue, updateMainValue) => {
  const {
    email, password, key, remember,
  } = state.registerForm;
  dispatch(updateFormValue('success', ''));
  dispatch(updateFormValue('error', ''));
  dispatch(updateFormValue('loading', true));
  if ((email !== '') && (password !== '')) {
    try {
      const response = await axios.post('https://www.aayopayo.com/app/app_login.php', querystring.stringify({ email, password, auth: key, type: 'user' }));
      console.log('respone of login ', response.data);
      const { data } = response;
      // console.log('login response data', data);
      if (!data.error) {
        await multiSetAsync([
          ['LOGIN_STATUS', 'true'],
          ['USER_NAME', data.fname],
          ['USER_EMAIL', data.email],
          ['USER_ID', `${data.uid}`],
          ['LOGIN_SESSION', data.ltext],
          ['USER_PHONE', `${data.phone}`],
        ]);
        dispatch(updateFormValue('remember', false));
        dispatch(updateFormValue('loginStatus', true));
        dispatch(updateMainValue('userId', { name: data.fname, email: data.email, id: data.uid, phoneNo: data.phone }));
        await fetchCoins(dispatch, state, updateMainValue, data.uid);
        await fetchNotifications();
        dispatch(updateFormValue('loading', false));
        dispatch(updateFormValue('email', ''));
        dispatch(updateFormValue('password', ''));
        navigation.navigate('MainScreen');
        if (remember) {
          setAsyncData('LOGIN_REMEMBER', true, dispatch, updateFormValue);
        }
      } else {
        dispatch(updateFormValue('loading', false));
        dispatch(updateFormValue('error', response.data.message));
      }
    } catch (e) {
      dispatch(updateFormValue('loading', false));
      dispatch(updateFormValue('error', 'Authentication Faild'));
      console.log('error in sing in ', e);
      throw e;
    }
  } else {
    dispatch(updateFormValue('loading', false));
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};

export const rememberCheckBoxPressHelper = (
  state, dispatch, content, navigation, updateFormValue,
) => {
  dispatch(updateFormValue('remember', !state.registerForm[content.value]));
};

export const resetButtonPressHelper = async (
  state, dispatch, navigation, updateFormValue,
) => {
  const { email } = state.registerForm;
  if (email !== '') {
    dispatch(updateFormValue('error', ''));
    dispatch(updateFormValue('loading', true));
    try {
      const response = await axios.post(`${BASE_URL}/forgot_password`, querystring.stringify({ email }));
      dispatch(updateFormValue('loading', false));
      if (response.data.status === 'success') {
        dispatch(updateFormValue('error', ''));
      }
      // console.log(response.data);
    } catch (e) {
      dispatch(updateFormValue('error', 'Reset Password Failed'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the feilds'));
  }
  // console.log('reset password clicked');
};

export const submitMessageButtonPressHelper = async (
  state, dispatch, navigattion, updateFormValue,
) => {
  dispatch(updateFormValue('success', ''));
  dispatch(updateFormValue('error', ''));
  dispatch(updateFormValue('loading', true));
  const { email, full_name, phone_number, message } = state.registerForm;  //eslint-disable-line
  if ((email !== '') && (full_name !== '') && (phone_number !== '') && (message !== '')) {  //eslint-disable-line
    try {
      const response = await axios.post(`${BASE_URL}/sendContactMessage.php`, querystring.stringify({ email, full_name, phone_number, message }));
      dispatch(updateFormValue('loading', false));
      dispatch(updateFormValue('success', 'Message successfully submitted we will contact you soon'));
      if (response.data.status === 'success') {
        dispatch(updateFormValue('loading', false));
      }
    } catch (e) {
      dispatch(updateFormValue('error', 'Failed to send message'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};
// 9826854519

export const signOutButtonPressHandler = async (
  state, dispatch, navigation, updateFormValue, updateMainValue,
) => {
  // console.log(navigation);
  dispatch(updateFormValue('asyncLoading', true));
  await setAsyncData('LOGIN_STATUS', 'flase');
  dispatch(updateFormValue('asyncLoading', false));
  dispatch(updateFormValue('loginStatus', false));
  dispatch(updateMainValue('userId', null));
  navigation.closeDrawer();
};

export const changePasswordButtonPressHelper = async (
  state, dispatch, navigation, updateFormValue, updateMainValue, updateModalValue,
) => {
  dispatch(updateFormValue('success', ''));
  dispatch(updateFormValue('error', ''));
  dispatch(updateFormValue('loading', true));
  const { password, opassword, cpassword } = state.registerForm;
  const { userId } = state.main;
  if ((password !== '') && (opassword !== '') && (cpassword !== '')) {
    if (password === cpassword) {
      try {
        const response = await axios.post(`${BASE_URL}/app_change_password.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV`, querystring.stringify({ uid: userId.id, npass: password, opass: opassword, vpass: cpassword }));
        dispatch(updateFormValue('loading', false));
        const { data } = response;
        // console.log('response of change passWord', response.data);
        if (!data.error) {
          dispatch(updateFormValue('loading', false));
          dispatch(updateFormValue('success', 'Your password has been changed successfully !'));
          dispatch(updateFormValue('password', ''));
          dispatch(updateFormValue('opassword', ''));
          dispatch(updateFormValue('cpassword', ''));
          signOutButtonPressHandler(state, dispatch, navigation, updateFormValue, updateMainValue);
          navigation.navigate('SignIn');
          dispatch(updateModalValue('showProfileModal', false));
        } else {
          dispatch(updateFormValue('loading', false));
          dispatch(updateFormValue('error', data.message));
        }
      } catch (e) {
        dispatch(updateFormValue('loading', false));
        dispatch(updateFormValue('error', 'Failed to send message'));
        throw e;
      }
    } else {
      dispatch(updateFormValue('loading', false));
      dispatch(updateFormValue('error', 'Password mismatch'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};
