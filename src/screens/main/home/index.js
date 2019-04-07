import React, { Component } from 'react';
import {
  Container, View,
} from 'native-base';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './custom-components/Header';
import NotificationModal from '../../model/notification';
import AddCoin from '../../model/add-coin';
import * as actions from '../../../actions';
import ContactUs from '../../model/contact-us';
import ProfileSetting from '../../model/profile-setting';
import FeaturedProduct from './featured-product';
import ImageSlider from './image-slider';
import LiveProduct from './live';
import BumperProduct from './bumper-product';
import UpcomingProduct from './upcoming';
import ClosedProduct from './closed-product';
import PlayNow from '../../model/play-now';
import MyBid from '../../model/my-bid';
import ShowInterInfo from '../../../common/ShowInternetConnectionInfo';

class index extends Component {
  state = { };

  render() {
    const { main } = this.props;
    return (
      <Container style={{ backgroundColor: '#F3F6EF' }}>
        <Header {...this.props} />
        <ShowInterInfo {...this.props} />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <ImageSlider {...this.props} />
          <FeaturedProduct {...this.props} />
          <LiveProduct {...this.props} />
          <View style={{ height: 5 }} />
          {main.bumperProduct && <BumperProduct {...this.props} /> }
          <View style={{ height: 5 }} />
          <UpcomingProduct {...this.props} />
          <View style={{ height: 5 }} />
          <ClosedProduct {...this.props} />
          <ContactUs {...this.props} />
          <ProfileSetting {...this.props} />
          {main.userId && <PlayNow {...this.props} />}
          {main.userId && <MyBid {...this.props} />}
          {main.userId && <NotificationModal {...this.props} />}
          {main.userId && <AddCoin {...this.props} />}
        </ScrollView>
      </Container>
    );
  }
}
index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
