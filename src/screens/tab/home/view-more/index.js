import React, { Component } from 'react';
import Modal from 'react-native-modal';
import ModalHeader from './Header';
import ModalContent from './Content';

class ContactUs extends Component {
  state = {};

  render() {
    const { modal } = this.props;
    // console.log('modal value in contact us page', modal);
    return (
      <Modal
        backdropColor="null"
        isVisible={modal.viewMore}
        animationInTiming={100}
        animationOutTiming={100}
        style={{ flex: 1, backgroundColor: '#f5f5f5', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        <ModalContent {...this.props} />
      </Modal>
    );
  }
}

export default ContactUs;
