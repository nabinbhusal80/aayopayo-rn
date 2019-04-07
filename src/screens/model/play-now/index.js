import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../../../common/Modal';
import Content from './Content';

class CustomModal extends Component {
  state={};

  render() {
    const { main } = this.props;
    return (
      <Modal {...this.props} title={main.productDetails.name ? main.productDetails.name : 'Title'} modalShow="modalPlaynowShow">
        {main.productDetails ? <Content {...this.props} /> : <View />}
      </Modal>
    );
  }
}
export default CustomModal;
CustomModal.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
