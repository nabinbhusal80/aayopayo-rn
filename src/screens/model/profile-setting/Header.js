import React from 'react';
import {
  Header, Right, Body, Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { APP_COLOR } from '../../../config';

const CustomeHeader = ({ updateModalValue }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Body>
      <Text style={{ color: '#fff', fontSize: 20 }}>Profile Setting</Text>
    </Body>
    <Right>
      <Icon style={{ color: '#fff' }} name="close" onPress={() => updateModalValue('showProfileModal', false)} />
    </Right>
  </Header>
);
CustomeHeader.propTypes = {
  updateModalValue: PropTypes.func.isRequired,
};
export default CustomeHeader;
