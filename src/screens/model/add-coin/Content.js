import React, { Component } from 'react';
import AddFinish from './addFinish';
import VideoPlayer from '../../../common/video-player';

class Content extends Component {

  state= { addFinish: false }

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
