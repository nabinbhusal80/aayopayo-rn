import { Alert } from 'react-native';
import axios from 'axios';
import querystring from 'querystring';
import { UPDATE_MODAL_VALUE } from './types';
import { BASE_URL } from '../config';
import { setAsyncData } from '../common/AsycstrorageAaayopayo';
import { updateMainValue } from './index';
import { updateFormValue } from './FormHandler';

const objectParser = (obj, clip) => {
  const array = Object.values(obj);
  const data = array.slice(0, array.length - clip);
  // console.log('array value of', data);
  return data;
};

const notificationParser = (data) => {
  const notiReadStatus = data.noalert;
  const notiHeaders = data.alertheader;
  const notiBody = data.alertbody;
  const notiProductId = data.productid;
  const notiDate = data.date;
  const notiTime = data.time;
  const notiData = notiHeaders.map((notiHeader, idx) => (
    {
      header: notiHeader,
      body: notiBody[idx],
      date: notiDate[idx],
      time: notiTime[idx],
      productId: notiProductId[idx],
    }
  ));
  return { notiReadStatus, notiData };
};

export const updateModalValue = (key, value) => ({
  type: UPDATE_MODAL_VALUE,
  payload: { key, value },
});

const markNotificationRead = async (userId, dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/app_mark_read_alert.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV&uid=${userId}`);
    const { data } = response;
    if (!data.error) {
      // console.log('notification marked', data);
      dispatch(updateModalValue('notificationReadStatus', false));
    }
  } catch {
    dispatch(updateModalValue('error', 'Faild to fetch data'));
  }
};

export const fetchNotifications = () => {
  return async (dispatch, getState) => {
    try {
      const { userId } = getState().main;
      if (userId) {
        dispatch(updateModalValue('modalNotificationShow', true));
        dispatch(updateModalValue('loading', true));
        const response = await axios.get(`${BASE_URL}/app_get_user_notification.php?uid=${userId.id}&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV`);
        // console.log('notification data', response.data);
        const { data } = response;
        dispatch(updateModalValue('loading', false));
        if (!data.error) {
          const parsedNotification = notificationParser(data);
          // console.log('notification after parsing', parsedNotification);
          dispatch(updateModalValue('notificationContent', parsedNotification.notiData));
          dispatch(updateModalValue('notificationReadStatus', parsedNotification.notiReadStatus));
          markNotificationRead(userId.id, dispatch, getState().modal.notificationContent);
        } else {
          dispatch(updateModalValue('error', data.message));
        }
      } else {
        Alert.alert('Please login to see your details');
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Faild to fetch notification'));
      throw e;
    }
  };
};

export const fetchCoins = async (dispatch, state, updateMainValue, uid) => {
  // console.log('user in fetch coin', uid);
  if (uid) {
    const coinRes = await axios.get(`https://www.aayopayo.com/app/app_num_user_coins.php?uid=${uid}&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV`);
    // console.log('coin response', coinRes.data);
    if (!coinRes.data.error) {
      dispatch(updateMainValue('userCoins', coinRes.data.numcoins));
      await setAsyncData('USER_COINS', `${coinRes.data.numcoins}`);
    }
  }
};

export const addCoinHandler = () => {
  // console.log('add coin show is called');
  return async (dispatch, getState) => {
    const { userId } = getState().main;
    const { videoContent } = getState().modal;
    dispatch(updateModalValue('addCoinSuccess', false));
    dispatch(updateModalValue('modalAddCoinShow', true));
    dispatch(updateModalValue('videoContent', { ...videoContent, title: '' }));
    dispatch(updateModalValue('loading', true));
    try {
      const response = await axios.get(`https://www.aayopayo.com/app/app_get_video_ad.php?uid=${userId.id}&cvid=${videoContent.cvid}&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV`);
      dispatch(updateModalValue('loading', false));
      if (!response.data.error) {
        dispatch(updateModalValue('videoContent', response.data));
        await setAsyncData('NEXT_ADD_VIDEO', `${response.data.cvid}`);
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Faild to fetch VedioUrl'));
    }
  };
};

export const addCoinSuccess = () => {
  // console.log('addCoinSuccess called');
  return async (dispatch, getState) => {
    try {
      const { videoContent } = getState().modal;
      const { userId, userCoins } = getState().main;
      const response = await axios.get(`${BASE_URL}/app_add_coin.php?token=${videoContent.token}=&uid=${userId.id}&auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV`);
      // console.log('addcoin response', response.data);
      if (!response.data.error) {
        dispatch(updateMainValue('userCoins', parseInt(userCoins, 10) + parseInt(response.data.cval, 10)));
        dispatch(updateModalValue('addCoinSuccess', true));
        fetchCoins(dispatch, getState(), updateModalValue, userId.id);
      }
    } catch (e) {
      dispatch(updateModalValue('error', 'Failed to add coins'));
    }
  };
};

export const doBidHandler = () => {
  return async (dispatch, getState) => {
    dispatch(updateModalValue('bidLoading', true));
    dispatch(updateModalValue('bidError', ''));
    dispatch(updateModalValue('addBidSuccess', ''));
    try {
      const { userId, showProductDetails, bidders, userCoins } = getState().main;
      const { bidPrice } = getState().registerForm;
      // console.log('do bid handler called', userId.id, showProductDetails, bidPrice);
      const bidRes = await axios.post('https://www.aayopayo.com/app/app_do_bid.php', querystring.stringify({ auth: 'AAYOPAAYOHULLAWERQUIPCSTHKVXEMV', id: showProductDetails, uid: userId.id, bid: bidPrice }));
      dispatch(updateModalValue('bidLoading', false));
      console.log('response of bid res', bidRes.data);
      if (bidRes.data.error) {
        dispatch(updateModalValue('bidError', bidRes.data.message));
      } else {
        dispatch(updateMainValue('bidders', [...bidders, { fullname: userId.name, userid: userId.id, bidamount: bidPrice }]));
        dispatch(updateMainValue('myBidAmount', bidPrice));
        dispatch(updateMainValue('userCoins', parseInt(userCoins, 10) - parseInt(bidPrice, 10)));
        dispatch(updateFormValue('bidPrice', ''));
        // dispatch(updateModalValue('modalPlaynowShow', false));
        dispatch(updateModalValue('addBidSuccess', bidRes.data.successmsg));
      }
    } catch (e) {
      throw e;
    }
  };
};

export const fetchMyBid = () =>  async (dispatch, getState) => {
  const { userId } = getState().main;
  try {
    dispatch(updateModalValue('showMyBid', true));
    dispatch(updateModalValue('loading', true));
    const myBidRes = await axios.get(`${BASE_URL}/app_my_bids.php?auth=AAYOPAAYOHULLAWERQUIPCSTHKVXEMV&uid=${userId.id}`);
    // console.log('my bid fetch response', myBidRes.data);
    dispatch(updateModalValue('loading', false));
    if (!myBidRes.data.error) {
      const myBidArray = objectParser(myBidRes.data, 3);
      dispatch(updateModalValue('myBidContent', myBidArray));
    }
  } catch (e) {
    throw e;
  }
};
