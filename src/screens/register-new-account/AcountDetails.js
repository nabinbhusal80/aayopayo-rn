import React, { Component } from 'react';
import { Container, Content, Card } from 'native-base';
import { connect } from 'react-redux';
import renderScreenHeader from '../../common/ScreenHeader';
import Form from '../../common/Form';
import acountDetailStructure from './acountDetailStructure';
import * as actions from '../../actions';

class AcountDetails extends Component {

  static navigationOptions = {
    header: null,
  }

  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('Enter your account details', navigation)}
        <Content style={{ padding: 10 }}>
          <Card style={{ padding: 20 }}>
            <Form contents={acountDetailStructure()} {...this.props} />
          </Card>
        </Content>
      </Container>
    );
  }
}

const MapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(MapStateToProps, { ...actions })(AcountDetails);
