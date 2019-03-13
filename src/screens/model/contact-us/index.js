import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
        isVisible={modal.modalContactuShow}
        animationInTiming={100}
        animationOutTiming={100}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        <KeyboardAwareScrollView>
          <ModalContent {...this.props} />
        </KeyboardAwareScrollView>
      </Modal>
    );
  }
}

export default ContactUs;
