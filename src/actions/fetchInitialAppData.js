import axios from 'axios';
import quesrystring from 'querystring';
import { UPDATE_MAIN_VALUE } from './types';
import { BASE_URL, AUTH_KEY } from '../config';
import { setAsyncData } from '../common/AsycstrorageAaayopayo';

const objectParser = (obj, clip) => {
  const array = Object.values(obj);
  const data = array.slice(0, array.length - clip);
  // console.log('array value of', data);
  return data;
};

export const updateMainValue = (key, value) => ({
  type: UPDATE_MAIN_VALUE,
  payload: { key, value },
});

export const fetchProduct = () => async (dispatch) => {
  // console.log('fetch product called');
  try {
    const liveData = await axios.get(`${BASE_URL}/app_get_products.php?type=Live&auth=${AUTH_KEY}`);
    // console.log('response of live product data', liveData.data);
    if (!liveData.data.error) {
      dispatch(updateMainValue('liveProduct', objectParser(liveData.data, 3)));
      // console.log('response of live product data', liveData.data);
      await setAsyncData('LIVE_PRODUCTS', JSON.stringify(objectParser(liveData.data, 3)));
    }
    const UpcomingData = await axios.get(`${BASE_URL}/app_get_products.php?type=up&auth=${AUTH_KEY}`);
    if (!UpcomingData.data.error) {
      dispatch(updateMainValue('upcomingProduct', objectParser(UpcomingData.data, 3)));
      await setAsyncData('UPCOMING_PRODUCTS', JSON.stringify(objectParser(UpcomingData, 3)));
    }
    const closedData = await axios.get(`${BASE_URL}/app_get_products.php?type=End&auth=${AUTH_KEY}`);
    if (!UpcomingData.data.error) {
      dispatch(updateMainValue('closedProduct', objectParser(closedData.data, 3)));
      await setAsyncData('CLOSED_PRODUCTS', JSON.stringify(objectParser(closedData, 3)));
    }
    const featuredProduct = await axios.get(`${BASE_URL}/app_get_featured_products.php?auth=${AUTH_KEY}&type=all`);
    if (!featuredProduct.data.error) {
      dispatch(updateMainValue('featuredProduct', objectParser(featuredProduct.data, 3)));
      await setAsyncData('FEATURED_PRODUCTS', JSON.stringify(objectParser(featuredProduct, 3)));
    }
    const imageSlider = await axios.get(`${BASE_URL}/app_get_slider_list.php?auth=${AUTH_KEY}`);
    if (!imageSlider.data.error) {
      dispatch(updateMainValue('imageSlider', objectParser(imageSlider.data, 3)));
      await setAsyncData('IMAGE_SLIDER', JSON.stringify(objectParser(imageSlider, 3)));
    }
    const bumperProduct = await axios.post(`${BASE_URL}/get_bumper.php`, quesrystring.stringify({ auth: AUTH_KEY }));
    if (!bumperProduct.data.error) {
      dispatch(updateMainValue('bumperProduct', bumperProduct.data));
    }
  } catch (e) {
    // console.log('error in fetch initial data', e);
    throw e;
  }
};

const checkMyBidHelper = (dispatch, getState, bidders) => {
  const { userId } = getState().main;
  // console.log('userid in chekcMybid Helper', userId);
  if (userId) {
    const userAvailabilty = bidders.some(data => data.userid === userId.id);
    // console.log('user Availability', userAvailabilty);
    if (userAvailabilty) {
      const myBids = bidders.filter(data => data.userid === userId.id);
      // console.log('my bid', myBids);
      dispatch(updateMainValue('myBidAmount', myBids[0].bidamount));
    } else {
      dispatch(updateMainValue('myBidAmount', null));
    }
  } else {
    dispatch(updateMainValue('myBidAmount', null));
  }
};

export const fetchProductDetails = pid => async (dispatch, getState) => {
  // console.log('fetch product details called', pid);
  try {
    dispatch(updateMainValue('error', ''));
    dispatch(updateMainValue('loading', true));
    const res = await axios.get(`${BASE_URL}/app_get_product_details.php?auth=${AUTH_KEY}&id=${pid}`);
    const { data } = res;
    // console.log('productDetails res', data);
    if (!data.error) {
      dispatch(updateMainValue('productDetails', data));
      if (data.bid) {
        dispatch(updateMainValue('bidders', Object.values(data.bid)));
        checkMyBidHelper(dispatch, getState, Object.values(data.bid));
        dispatch(updateMainValue('loading', false));
      } else {
        dispatch(updateMainValue('bidders', []));
        checkMyBidHelper(dispatch, getState, []);
        dispatch(updateMainValue('loading', false));
      }
      // console.log(Object.values(data.bid));
    } else {
      dispatch(updateMainValue('loading', false));
      dispatch(updateMainValue('error', data.message));
    }
  } catch (e) {
    dispatch(updateMainValue('loading', false));
    dispatch(updateMainValue('error', 'Network connection error'));
    throw e;
  }
};
