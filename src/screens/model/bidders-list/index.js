import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { View, Spinner } from 'native-base';
import ModalHeader from './Header';
import ModalContent from './Content';

class ShowBidderList extends Component {
  state = {};

  render() {
    const { modal, updateModalValue, main } = this.props;
    // console.log('modal value in contact us page', modal);
    return (
      <Modal
        backdropColor="null"
        isVisible={modal.showBidderList}
        animationInTiming={100}
        animationOutTiming={100}
        onBackButtonPress={() => updateModalValue('showBidderList', false)}
        style={{ flex: 1, backgroundColor: '#fff', margin: 0 }}
      >
        <ModalHeader {...this.props} />
        {main.bidders !== null
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

ShowBidderList.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
};

export default ShowBidderList;
