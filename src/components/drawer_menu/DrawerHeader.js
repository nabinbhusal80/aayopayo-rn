import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  Header, Left, Icon, Body, Title, Text, View,
} from 'native-base';
import {
  APP_COLOR, APP_TITLE_TEXT_COLOR, SCREEN_HEIGHT, SCREEN_WIDTH,
} from '../../config';

class DrawerHeader extends Component {
  state = {};

  renderBackGroundImage = () => {
    const {
      header, main, updateFormValue, navigation,
    } = this.props;
    if (header.title === 'Menu') {
      return (
        <View style={{
          width: SCREEN_WIDTH * 0.8,
          height: SCREEN_HEIGHT * 0.2,
          backgroundColor: APP_COLOR,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Image style={{ height: 80, width: 80, marginTop: -10 }} source={require('../../../assets/applogo.png')} />
          {main.userId !== null ? (
            <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontSize: 12, alignItems: 'center' }}>{` ${main.userId.name}`}</Text>
              <Text style={{ color: '#FFF', fontSize: 12 }}>{` ${main.userId.email}`}</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                updateFormValue('error', '');
                updateFormValue('loading', false);
                updateFormValue('success', '');
                updateFormValue('password', '');
                navigation.navigate('SignIn');
              }}
              style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <Icon name="log-in" style={{ color: 'white', marginRight: 5 }} />
              <Text style={{ color: 'white', fontSize: 20 }}>
              SignIn
              </Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }
    return (
      <View style={{
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.2,
      }}
      >
        <Text
          style={{
            padding: 10,
            color: '#757575',
            borderBottomWidth: 0.5,
            borderBottomColor: '#757575',
          }}
        >
          {header.contentMessage}
        </Text>
      </View>
    );
  }

  render() {
    const { header, navigation } = this.props;
    return (
      <View>
        <Header style={{ backgroundColor: APP_COLOR, elevation: 2 }}>
          <Left>
            <Icon
              style={{ color: APP_TITLE_TEXT_COLOR }}
              name={header.title === 'Menu' ? 'close' : 'arrow-back'}
              onPress={() => navigation.closeDrawer()}
            />
          </Left>
          <Body>
            <Title>
              <Text
                style={{
                  color: APP_TITLE_TEXT_COLOR,
                  fontSize: 20,
                }}
              >
                {header.title}
              </Text>
            </Title>
          </Body>
        </Header>
        {this.renderBackGroundImage()}
      </View>
    );
  }
}

DrawerHeader.defaultProps = {
  header: {},
  navigation: {},
};

DrawerHeader.propTypes = {
  header: PropTypes.objectOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any),
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};

export default DrawerHeader;
