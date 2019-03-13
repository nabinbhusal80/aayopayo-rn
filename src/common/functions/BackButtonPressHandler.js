import { BackHandler } from 'react-native';

export const handleAndroidBackButton = (callBack) => {
  BackHandler.addEventListener('hardwareBackPress', () => {
    callBack();
    console.log('back button pressed');
    return true;
  });
};

export const removeAndroidBackButttonHandler = () => {
  BackHandler.removeEventListener('hardwareBackPress', () => {});
};
