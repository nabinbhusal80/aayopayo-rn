import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../../../common/Modal';
import Content from './Content';

class CustomModal extends Component {
  state={ };

  render() {
    const { modal } = this.props;
    return (
      <Modal {...this.props} title="Notifications" modalShow="modalNotificationShow">
        {modal.notificationContent ? <Content {...this.props} /> : <View />}
      </Modal>
    );
  }
}
export default CustomModal;
CustomModal.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
};
