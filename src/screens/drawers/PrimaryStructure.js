import { APP_LOGO } from '../../config';

export const header = { iconLeft: 'close', title: 'Menu', logo: APP_LOGO };

export const contents = (status) => {
  // console.log('status in contents', status);

  return [
    {
      element: 'touchable', iconLeft: 'notifications', label: 'Order Notification', iconRight: null,
    },
    {
      element: 'touchable', iconLeft: 'time', label: 'Bid History', iconRight: null,
    },
    // {
    //   element: 'separator', label: null,
    // },
    {
      element: 'touchable', iconLeft: 'person', label: 'Profile Setting', iconRight: null,
    },
    // {
    //   element: 'touchable', iconLeft: 'home', label: 'Delivery Address', iconRight: null,
    // },
    {
      element: 'separator', label: null,
    },
    {
      element: 'touchable', iconRight: 'help-circle', label: 'About Us', iconLeft: null,
    },
    {
      element: 'touchable', iconRight: 'at', label: 'Contact Us', iconLeft: null,
    },

    {
      element: status && 'touchable', iconRight: status && 'log-out', label: status && 'Sign Out', iconLeft: null,
    },
  ];
};
export const footer = { footerNote: 'Our mission is make specialized Vedic astrology to all people in a convennient effective reliable and affordable way' };
