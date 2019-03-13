import { Dimensions, StatusBar, Platform } from 'react-native';

export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const BASE_URL = 'https://www.aayopayo.com/app';

export const AUTH_KEY = 'AAYOPAAYOHULLAWERQUIPCSTHKVXEMV';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const APP_LOGO =  require('../../assets/brand.png'); //eslint-disable-line

export const APP_TITLE_TEXT_COLOR = '#fff';

export const APP_COLOR = '#28353B';
