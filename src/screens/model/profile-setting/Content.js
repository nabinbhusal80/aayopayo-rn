import React, { Component } from 'react';
import { Content, Card } from 'native-base';
import { connect } from 'react-redux';
import Form from '../../../common/Form';
import * as actions from '../../../actions';

const settingStructure = [
  { element: 'input', label: 'Old password', value: 'opassword' },
  { element: 'input', label: 'New password', value: 'password' },
  { element: 'input', label: 'Verify new password', value: 'cpassword' },
  { element: 'button', label: 'Change Password' },
];

class Settings extends Component {
  state={};

  render() {
    return (
      <Content style={{ padding: 20 }}>
        <Card style={{ margin: 20, padding: 20 }}>
          <Form contents={settingStructure} {...this.props} />
        </Card>
      </Content>
    );
  }
}

const mapStateToProps = ({ registerForm }) => ({ registerForm });

export default connect(mapStateToProps, { ...actions })(Settings);
