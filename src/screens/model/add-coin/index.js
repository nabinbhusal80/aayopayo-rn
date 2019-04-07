import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../common/Modal';
import Content from './Content';

class CustomModal extends Component {

  state={};

  render() {
    const { modal } = this.props;
    return (
      <Modal {...this.props} title={ modal.videoContent.title ? modal.videoContent.title : ''} modalShow="modalAddCoinShow">
        <Content {...this.props} />
      </Modal>
    );
  }
}
export default CustomModal;
CustomModal.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
};
