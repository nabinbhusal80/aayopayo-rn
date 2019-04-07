import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'native-base';
import * as actions from '../../../../../actions';
import Content from './Content';
import InternetInfo from '../../../../../common/ShowInternetConnectionInfo';

class index extends Component {

  static navigationOptions = {
    title: 'Product Details',
  }

  state = {};

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#F3F6EF', margin: 0 }}>
        <InternetInfo {...this.props} />
        <Content {...this.props} id={navigation.getParam('id')} />
      </View>
    );
  }
}
index.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
