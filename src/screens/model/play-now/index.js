import React, { Component } from 'react';
import { View } from 'react-native';
import Modal from '../../../common/Modal';
import Content from './Content';

class CustomModal extends Component {
  state={};

  render() {
    // console.log('content value in main index noti', this.props.modal);
    const { modal, main } = this.props;
    // console.log('props in bid now', main.bidders);
    return (
      <Modal {...this.props} title={main.productDetails.name ? main.productDetails.name : 'Title'} modalShow="modalPlaynowShow">
        {main.productDetails ? <Content {...this.props} /> : <View />}
      </Modal>
    );
  }
}
export default CustomModal;
