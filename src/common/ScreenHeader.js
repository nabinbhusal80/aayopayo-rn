import React from 'react';
import { Header, Left, Body, Title, Icon } from 'native-base';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../config';

export default (title, navigation) => {
  return (
    <Header style={{ backgroundColor: APP_COLOR }}>
      <Left>
        <Icon name="arrow-back" onPress={() => navigation.goBack()} style={{ color: APP_TITLE_TEXT_COLOR }}/>
      </Left>
      <Body>
        <Title>
          {title}
        </Title>
      </Body>
    </Header>
  );
};
