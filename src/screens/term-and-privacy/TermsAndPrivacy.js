import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';
import Accordion from '../../common/Accordion';


const BasicTermsArray = [
  'You must be 18 years or above to use this site.If you are 18 years or still a minor, you must have your parents or guardian permission to use aayopayo services. Please have him/her read this agreement with you.',
  'You are responsible for the issues that occurs under your screen name.',
  'You must be responsible for keeping your password safe and secure.',
  'You must not modify, hack or attack aayopayo and modify another website so as to falsely imply that it is associated with aayopayo.',
  'You must not use website URLs in your name without prior consent from aayopayo.',
  'You must not use aayopayo services for illegal or unauthorized purpose. International users must comply with all local laws regarding online conduct and acceptable content.',
  'You are solely responsible for all conducts including play amounts, transactions and occurs under your screen name.',
  'You must not access Ayopayo’s private API by any other means except Ayopayo app itself.',
  'Once a playing amount is placed on a product, the available credits are deducted from the user account as per the amount on the product. Placed playing amount are nonrefundable.',
  'All unused and available credits are nonrefundable and nontransferable.',
  'Group Bidding is strictly prohibited.',
  'You must not, in the use of aayopayo, violate any laws in the jurisdiction.',
  'Violation of any of these agreement will result in termination of your Ayopayo account. Ayopayo reserves right to block or delete any account without any prior notice to the user at any time.',
];

const dataArray = [
  {
    title: 'Basic Terms',
    content: BasicTermsArray,
  },
  {
    title: 'General Conditions',
    content: [
      `This Terms and Condition constitute the agreement between Ayopayo and You, and obliges you to stay under the following Terms and Condition. Ayopayo is not responsible for the action of users who have read or been informed of the Terms and Condition. Ayopayo reserves the right to dissolve any user account without any prior notices to the user anytime. The terms govern the use of Ayopayo services, ayopayo goods, embedded video player, products, apps, technologies and software.`
    ]
  },
  {
    title: 'Eligibility',
    content: [
      `By Agreeing to the Terms and Condition or Registering with Ayopayo, or by accessing the services of Ayopayo through Ayopayo app, or visit the websites or app that use ayopayo product, services and technologies, You certify that you are 18 years of age or above. By Using Aayopayo Services, you guarantee that you have right, authority and capacity to participate in the playing process and can engage in the buying section thereafter.`
    ],
  },
  {
    title: 'Registration',
    content: [
      `Your registration with Ayopayo confirms you are 18 years of age or optimum age subjected to the laws of state, city or country. Your registration with aayopayo guarantee you to use all the services and features. You must fulfill all the credentials as asked in the Signup page. You must provide complete and accurate registration information, and notify us if information changes.`
    ],
  },
  {
    title: 'Privacy',
    content: [
      `We collect and use the information you provide us through use of services of Aayopayo in a way set forth in the Privacy Policy.`
    ],
  },
  {
    title: 'How Playing Process Works',
    content: [
      `The playing process starts after you manually place virtual coin on a live product. An amount equivalent to the coin manually placed on the produced will be automatically deducted. The amount deducted is nonrefundable. After the time end on a particular product, unique amount with lowest value will be selected automatically from list of players. User Id* with corresponding unique amount will be declared winner.
      *Note: If none of the virtual coin placed on the product is unique, No winner will be declared and the live product will be terminated without any notice.`
    ],
  },
  {
    title: 'Buy Now',
    content: [
      `There is an arrangement of buy now option for the users and members who desire to obtain product. We may , at our sole discretion, offers you to buy the product displayed in Ayopayo website, Aayopayo mobile app at a price mentioned As Mrp. in Product Specification Section.`
    ],
  },
  {
    title: 'Payment',
    content: [
      `Once a play is closed, the winner gets a notification with a congratulation message. Information with MRP price exclusive of the tax , vat and delivery cost will be displayed on the product. Winner may contact operator for information regarding net total charges on the product including shipping charges. Users must also provide accurate location on their account, before aayopayo can deliver the product. Failure to pay and confirm the order after 12 days the play is closed, will result in termination of our agreement with the winner. Virtual Coins Spent on the play will not be refunded in regards of failure of user to contact our operator in 12 day time after the play has ended.`
    ],
  },

  {
    title: 'Delivery',
    content: [
      `Unless specified, aayopayo will ship the product to the location provided by the user on his account information. Delivery will be available for the location stated in the following address of this delivery section.
    Deliver in the Kathmandu valley districts (Kathmandu, Bhaktapur and Lalitpur) will be done within 2 days of the closure of the play. Users in the district outside of Kathmandu valley will receive their product within 10 days of the contact with our operators. We deliver product to you through our third-party trusted partners. Damage on the goods during delivery and packaging is obvious. Users are also advised to see the goods clearly before signing the consignment with our third- party partners. Any consignment relating delivery signed by the users will not be replaced.`
    ],
  },
  {
    title: 'Account Termination',
    content: [`This Agreement begins on the date you set up your account and continue until you use Aayopayo services.
    By You: You hold the right to terminate your account at any time. By Aayopayo: Aayopayo reserve to terminate any account without any prior notice to the user at any time without any reasons. Similarly, aayopayo will terminate any account that try to or breaches aayopayo services with use of any third party system. Aayopayo, will then further process to compensate for the losses caused to aayopayo with use of third party system. Ayopayo may close any username related with an established institution , business firm or brands.`
    ],
  },
];

class TermsAndPrivacy extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('Terms And Privacy', navigation)}
        <Content>
          {Accordion(dataArray)}
        </Content>
      </Container>
    );
  }
}

TermsAndPrivacy.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TermsAndPrivacy;
