import { UPDATE_MAIN_VALUE } from '../actions/types';

const INITIAL_MAIN_STATE = {
  liveProduct: [],
  upcomingProduct: [],
  closedProduct: [],
  featuredProduct: [],
  imageSlider: [],
  bumperProduct: null,
  userCoins: null,
  userCurrentGetCoins: null,
  userNotification: null,
  loading: false,
  success: false,
  error: null,
  bidders: [],
  myBidAmount: null,
  productDetails: {},
  showProductDetails: null,
  userId: null,
};
export default (state = INITIAL_MAIN_STATE, actions) => {
  switch (actions.type) {
    case UPDATE_MAIN_VALUE:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};
