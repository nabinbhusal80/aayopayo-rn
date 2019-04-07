
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import MainDrawer from '../screens/drawers/index';
import MainScreen from '../screens';
import TermsAndPrivacy from '../screens/term-and-privacy/TermsAndPrivacy';
import AboutUs from '../screens/aboutus/AboutUs';
import AcountDetails from '../screens/register-new-account/AcountDetails';
import PersonalDetails from '../screens/register-new-account/PersonalDetails';
import SignIn from '../screens/sign-in';
import ForgotPassword from '../screens/forgot-password';
import { SCREEN_WIDTH, APP_COLOR } from '../config';
import ProductDetails from '../screens/main/home/custom-components/product-details';
import ViewMore from '../screens/main/home/view-more';
import BiddersList from '../screens/model/bidders-list';

const stackNavigator = createStackNavigator({
  MainScreen,
  RegisterNewAccount: AcountDetails,
  PersonalDetails,
  AboutUs,
  TermsAndPrivacy,
  SignIn,
  ForgotPassword,
  ProductDetails,
  ViewMore,
  BiddersList,
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
});

const RootRouter = createDrawerNavigator({
  Home: stackNavigator,
}, {
  contentComponent: MainDrawer,
  drawerWidth: SCREEN_WIDTH * 0.8,
});
export default createAppContainer(RootRouter);
