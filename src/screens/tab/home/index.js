import React, { Component } from 'react';
import {
  Container, View,
} from 'native-base';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Header from './custom-components/Header';
import NotificationModal from '../../model/notification';
import AddCoin from '../../model/add-coin';
import * as actions from '../../../actions';
import ProductDetails from './custom-components/product-details';
import ContactUs from '../../model/contact-us';
import ProfileSetting from '../../model/profile-setting';
import FeaturedProduct from './featured-product';
import ImageSlider from './image-slider';
import LiveProduct from './live';
import BumperProduct from './bumper-product';
import UpcomingProduct from './upcoming';
import ClosedProduct from './closed-product';
import ViewMore from './view-more';
import PlayNow from '../../model/play-now';
import MyBid from '../../model/my-bid';
import ShowBidderList from '../../model/bidders-list';

class index extends Component {
  state = { active: false };

  render() {
    // console.log('featured product details', this.props.main.myBidAmount);
    const { main } = this.props;
    return (
      <Container style={{ backgroundColor: '#F3F6EF' }}>
        <Header {...this.props} />
        {/* <FloatingAction {...this.props} /> */}
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
          <ProductDetails {...this.props} />
          <ProfileSetting {...this.props} />
          <ViewMore {...this.props} />
          {main.userId && <PlayNow {...this.props} />}
          {main.userId && <MyBid {...this.props} />}
          {main.userId && <NotificationModal {...this.props} />}
          {main.userId && <AddCoin {...this.props} />}
          {main.userId && <ShowBidderList {...this.props} />}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
