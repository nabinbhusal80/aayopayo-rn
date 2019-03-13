import React from 'react';
import { Header, Right, Body, Text, Icon, Left, Button } from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../../../config';

export default ({ updateMainValue }) => (
  <Header style={{ backgroundColor: APP_COLOR }}>
    <Left>
      <Button transparent onPress={() => updateMainValue('showProductDetails', null)}>
        <Icon name="arrow-back" style={{ color: 'white' }} />
      </Button>
    </Left>
    <Body>
      <Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 20 }}>Product Details</Text>
    </Body>
  </Header>
);
