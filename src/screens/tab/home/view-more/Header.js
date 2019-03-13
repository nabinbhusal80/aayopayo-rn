import React from 'react';
import {
  Header, Right, Body, Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { APP_COLOR } from '../../../../config';

const headerHelper = (header) => {
  switch (header) {
    case 'closedProduct':
      return 'Close Products';
    case 'liveProduct':
      return 'Live Poducts';
    case 'upcomingProduct':
      return 'Upcoming Products';
    default:
      return null;
  }
};

const CustomeHeader = ({ updateModalValue, modal }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Body>
      <Text style={{ color: '#fff', fontSize: 15 }}>{headerHelper(modal.viewMoreContent)}</Text>
    </Body>
    <Right>
      <Icon style={{ color: '#fff' }} name="close" onPress={() => updateModalValue('viewMore', false)} />
    </Right>
  </Header>
);
CustomeHeader.propTypes = {
  updateModalValue: PropTypes.func.isRequired,
};
export default CustomeHeader;
