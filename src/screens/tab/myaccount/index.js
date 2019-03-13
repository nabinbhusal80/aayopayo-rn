import React, { Component } from 'react';
import {
  Container, Icon, Text, Tabs, Tab, TabHeading,
} from 'native-base';
import { APP_COLOR } from '../../../config';
import renderScreenHeader from '../../../common/ScreenHeader';
import Settings from './Settings';
import MyAccount from './MyAccount';
import MyBids from './MyBids';

class index extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('My Account', navigation)}
        <Tabs tabBarBackgroundColor={APP_COLOR} tabBarPosition="top">
          <Tab heading={(
            <TabHeading style={{ backgroundColor: APP_COLOR }} tabStyle={{ backgroundColor: APP_COLOR }} activeTabStyle={{ backgroundColor: APP_COLOR }}>
              <Icon name="home" />
              <Text>
              My Profile
              </Text>
            </TabHeading>
            )}
          >
            <MyAccount />
          </Tab>
          <Tab heading={(
            <TabHeading style={{ backgroundColor: APP_COLOR }} tabStyle={{ backgroundColor: APP_COLOR }} activeTabStyle={{ backgroundColor: APP_COLOR }}>
              <Icon name="hammer" />
              <Text>
              My Bids
              </Text>
            </TabHeading>
          )}
          >
            <MyBids />
          </Tab>
          <Tab heading={(
            <TabHeading style={{ backgroundColor: APP_COLOR }} tabStyle={{ backgroundColor: APP_COLOR }} activeTabStyle={{ backgroundColor: APP_COLOR }}>
              <Icon name="settings" />
              <Text>
              Settings
              </Text>
            </TabHeading>
          )}
          >
            <Settings {...this.props} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default index;
