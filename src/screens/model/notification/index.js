import React, { Component } from 'react';
import { View } from 'react-native';
import Modal from '../../../common/Modal';
import Content from './Content';

class CustomModal extends Component {
  state={ };

  render() {
    // console.log('content value in main index noti', this.props.modal);
    const { modal } = this.props;
    return (
      <Modal {...this.props} title="Notifications" modalShow="modalNotificationShow">
        {modal.notificationContent ? <Content {...this.props} /> : <View />}
      </Modal>
    );
  }
}
export default CustomModal;
