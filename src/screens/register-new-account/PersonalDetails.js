import React, { Component } from 'react';
import { Container, Content, Card } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderScreenHeader from '../../common/ScreenHeader';
import Form from '../../common/Form';
import personalStructure from './personalDetailStructure';
import * as actions from '../../actions';

class PersonalDetails extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('Enter your personal details', navigation)}
        <Content style={{ padding: 10 }}>
          <Card style={{ padding: 20 }}>
            <Form contents={personalStructure()} {...this.props} />
          </Card>
        </Content>
      </Container>
    );
  }
}

PersonalDetails.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(PersonalDetails);
