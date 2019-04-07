import React, { Component } from 'react';
import { Linking } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container, Content, View, Text, Card,
} from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';
import Form from '../../common/Form';
import sinInStructure from './signInStructure';
import * as actions from '../../actions';
import ShowInternetConnectionInfo from '../../common/ShowInternetConnectionInfo';

class Index extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation, updateFormValue } = this.props;
    return (
      <Container style={{ backgroundColor: '#F3F6EF' }}>
        {renderScreenHeader('Sign In', navigation)}
        <Content style={{ padding: 10 }}>
          <ShowInternetConnectionInfo {...this.props} />
          <Card style={{ padding: 20, paddingBottom: 40 }}>
            <Form contents={sinInStructure()} {...this.props} />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ color: 'blue' }} onPress={() => Linking.openURL('https://www.aayopayo.com/forgot.php')}>
                Forgot your password ?
              </Text>
              <Text style={{ marginTop: 20 }}>
                Do not have account?
                <Text
                  style={{ color: 'blue', margin: 10 }}
                  onPress={() => {
                    updateFormValue('full_name', '');
                    updateFormValue('email', '');
                    updateFormValue('password', '');
                    updateFormValue('cpassword', '');
                    updateFormValue('phone_number', '');
                    updateFormValue('error', '');
                    updateFormValue('dob', '');
                    navigation.navigate('RegisterNewAccount');
                  }}
                >
                Sign Up
                </Text>
              </Text>
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
}

Index.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};
const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(Index);
