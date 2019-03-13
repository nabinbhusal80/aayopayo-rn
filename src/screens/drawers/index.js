import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { connect } from 'react-redux';
import Primary from './Primary';
import * as actions from '../../actions';

class index extends Component {
  state={ renderMenu: true };

  async componentWillMount() {
    this.setState({ renderMenu: false });
  }

  render() {
    const { renderMenu } = this.state;
    if (renderMenu) {
      return (<View><Text>Loading ...</Text></View>);
    }
    return (
      <Primary {...this.props} />
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
