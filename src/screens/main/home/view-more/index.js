import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'native-base';
import * as actions from '../../../../actions';
import Content from './Content';
import InternetInfo from '../../../../common/ShowInternetConnectionInfo';

class index extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  }

  state = {};

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F3F6EF', margin: 0, paddingLeft: 7 }}>
        <InternetInfo {...this.props} />
        <Content {...this.props} />
      </View>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
