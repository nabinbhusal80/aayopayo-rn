import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, View } from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';
import Form from '../../common/Form';
import forgotPasswordStructure from './forgotPasswordStructure';
import * as actions from '../../actions';

class Index extends Component {

  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    // console.log(this.props.registerForm);
    return (
      <Container>
        {renderScreenHeader('Forgot Password', navigation)}
        <Content>
          <View>
            <Form contents={forgotPasswordStructure()} {...this.props} />
          </View>
        </Content>
      </Container>
    );
  }
}

Index.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired  //eslint-disable-line
};
const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(Index);
