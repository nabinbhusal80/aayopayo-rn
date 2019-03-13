import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, Spinner } from 'native-base';
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
        isVisible={modal.showMyBid}
        animationInTiming={100}
        animationOutTiming={100}
        onBackButtonPress={() => updateModalValue('showMyBid', false)}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        {modal.myBidContent !== null
          ? <ModalContent {...this.props} />
          : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Spinner size="large" />
            </View>
          )
      }
      </Modal>
    );
  }
}

ContactUs.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};

export default ContactUs;
