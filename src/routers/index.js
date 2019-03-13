
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import MainDrawer from '../screens/drawers/index';
import MainScreen from '../screens';
import TermsAndPrivacy from '../screens/term-and-privacy/TermsAndPrivacy';
import AboutUs from '../screens/aboutus/AboutUs';
import AcountDetails from '../screens/register-new-account/AcountDetails';
import PersonalDetails from '../screens/register-new-account/PersonalDetails';
import SignIn from '../screens/sign-in';
import ForgotPassword from '../screens/forgot-password';
import MyAccount from '../screens/tab/myaccount';
import { SCREEN_WIDTH, APP_COLOR } from '../config';
import ProductDetails from '../screens/tab/home/custom-components/product-details';

const stackNavigator = createStackNavigator({
  MainScreen,
  RegisterNewAccount: AcountDetails,
  PersonalDetails,
  AboutUs,
  TermsAndPrivacy,
  SignIn,
  ForgotPassword,
  MyAccount,
  ProductDetails,
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: APP_COLOR,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white',
    },
  },
},
);

const RootRouter = createDrawerNavigator({
  Home: stackNavigator,
}, {
  contentComponent: MainDrawer,
  drawerWidth: SCREEN_WIDTH * 0.8,
});
export default createAppContainer(RootRouter);
