import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddFinish from './addFinish';
import VideoPlayer from '../../../common/video-player';

class Content extends Component {

  state= {}

  render() {
    const { modal } = this.props;
    return (
      modal.addCoinSuccess
        ? (<AddFinish {...this.props} />)
        : (
          <VideoPlayer {...this.props} />
        )
    );
  }
}
export default Content;
Content.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
};
