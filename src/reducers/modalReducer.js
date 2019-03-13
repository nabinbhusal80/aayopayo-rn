import { UPDATE_MODAL_VALUE } from '../actions/types';

const INITIAL_MODAL_STATE = {
  modalNotificationShow: false,
  modalAddCoinShow: false,
  modalContactuShow: false,
  modalPlaynowShow: false,
  viewMore: false,
  viewMoreContent: null,
  readNotificationSpinner: null,
  notificationReadStatus: false,
  showProfileModal: false,
  loading: false,
  videoContent: {},
  addCoinSuccess: false,
  error: '',
  notificationContent: null,
  addBidSuccess: '',
  bidError: '',
  bidLoading: false,
  showMybid: false,
  showBidderList: false,
  myBidContent: null,
};

export default (state = INITIAL_MODAL_STATE, actions) => {
  switch (actions.type) {
    case UPDATE_MODAL_VALUE:
      return { ...state, [actions.payload.key]: actions.payload.value };
    default:
      return state;
  }
};
