import React, { Component } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalHeader from './Header';
import ModalContent from './Content';

class ContactUs extends Component {
  state = {};

  render() {
    const { modal, updateModalValue } = this.props;
    // console.log('modal value in contact us page', modal);
    return (
      <Modal
        backdropColor="null"
        isVisible={modal.showProfileModal}
        animationInTiming={100}
        animationOutTiming={100}
        onBackButtonPress={() => updateModalValue('showProfileModal', false)}
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
ContactUs.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
export default ContactUs;
