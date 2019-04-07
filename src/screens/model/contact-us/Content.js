import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text, View, Icon, Card } from 'native-base';
import * as actions from '../../../actions';
import Form from '../../../common/Form';
import contactUsStructure from './contentStructure';

class CustomContent extends Component {
  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    return (
      <Container>
        <Content style={{ padding: 20 }}>
          <Card style={{ padding: 20 }}>
            <Form contents={contactUsStructure()} {...this.props} />
          </Card>
          <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="pin" style={{ color: 'blue' }}><Text style={{ color: 'blue' }}>{`  ${'Baneshwar, Kathmandu (Nepal)'}`}</Text></Icon>
            <Icon name="call" style={{ color: 'blue', marginTop: 10 }}>
              <Text style={{ color: 'blue' }}>
                {`  ${'01-5552222'}, ${'+977-985444433'}`}
              </Text>
            </Icon>
          </View>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(CustomContent);
