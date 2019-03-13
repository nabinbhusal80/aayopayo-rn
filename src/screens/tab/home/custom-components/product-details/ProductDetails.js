import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { View, Text, Button, Badge, Icon, Card } from 'native-base';
import DateTimeFormator from '../../../../../common/functions/DateTimeFormator';
import Timer from '../../live/Timer';
import Bidders from './Bidders';
import { APP_COLOR, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../config';

class ProductDetails extends Component {
  state = {};

  onTimerFinish = () => {
    const { main, fetchProductDetails } = this.props;
    fetchProductDetails(main.showProductDetails);
  }

  render() {
    const { main, updateModalValue } = this.props;
    console.log('my bid Amount is', main.myBidAmount);
    const { name, price, status, winner, start_date, end_date, start_time, end_time, image} = main.productDetails;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          <Card style={{ paddingBottom: 20, flexWrap: 'wrap', marginTop: 0, marginBottom: 0, width: '100%', zIndex: 100 }}>
            <View style={{ elevation: 2 }}>
              <Image
                source={{ uri: image }}
                resizeMode="contain"
                style={{
                  width: 250,
                  height: 200,
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{ margin: 5, padding: 10, width: '100%' }}>
              <Text style={{ fontWeight: 'bold', color: 'black' }}>
                {name}
              </Text>
              <Text>
                {`NPR ${price}`}
              </Text>
              {status === 'up' && <Text style={{ fontSize: 15 }}>{`Start at : ${DateTimeFormator(start_date, start_time, 'YYYY-MM-DD hh:mm a')}`}</Text>}
              <Text>
                <Text style={{ color: '#0000009f' }}>Product ID:</Text>
                {` #${main.showProductDetails}`}
              </Text>
              { status === 'end'
              && (
                <View>
                  <Text style={{ fontSize: 15 }}>{`Ended On: ${DateTimeFormator(end_date, end_time, 'YYYY-MM-DD hh:mm a')} NPT`}</Text>
                  <Text>This product is closed</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
                    <Text style={{ fontSize: 30 }}>Winner:</Text>
                    <View style={{ borderRadius: 5, backgroundColor: 'green', padding: 10, marginLeft: 10 }}>
                      <Text style={{ color: 'white', fontSize: 20 }}>{winner}</Text>
                    </View>
                  </View>
                </View>
              )
            }
            </View>
            {status === 'live'
              && (
                <View style={{ alignSelf: 'center' }}>
                  <Timer endDate={end_date} endTime={end_time} context={this.context} name={status} {...this.props} onTimerFinish={this.onTimerFinish} productDetails />
                </View>
              )
              }
            <View style={{ padding: 5, backgroundColor: 'white', margin: 5 }}>
              <Text>{main.productDetails.details ? main.productDetails.details : 'Product detials not available'}</Text>
            </View>
          </Card>
          {status === 'live'
          && (
            <Card style={{ width: 'auto', alignSelf: 'center', marginBottom: -20, zIndex: 1000, marginTop: -20  }}>
              <Button
                disabled={(main.myBidAmount === null && main.userId === null) || (main.myBidAmount !== null && main.userId !== null)}
                full
                style={{ alignSelf: 'center' }}
                success
                onPress={() => {
                  updateModalValue('addBidSuccess', '');
                  updateModalValue('bidError', '');
                  updateModalValue('modalPlaynowShow', true);
                }}
              >
                <Text>
                  {main.myBidAmount !== null ? `You already have bid for this product\n Your bid amount : ${main.myBidAmount}` : 'Playnow'}
                </Text>
              </Button>
            </Card>
          )
          }
          { status !== 'up'
        && (
          <Card style={{paddingTop: 20, paddingBottom: 20, marginBottom: 20, width: '100%', height: 'auto', zIndex: 10 }}>
            {main.bidders.length !== 0
              ? (
                main.userId && (
                  <View>
                    <Text style={{ marginBottom: 20, alignSelf: 'center', marginTop: 10 }}>{`Total number of bidders: ${main.bidders.length}`}</Text>
                    <Bidders bidders={main.bidders} userId={main.userId} />
                    <TouchableOpacity onPress={() => updateModalValue('showBidderList', true)} style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: APP_COLOR , textDecorationLine: 'underline' }}>Show more bidders</Text></TouchableOpacity>
                  </View>
                )
              )
              : main.userId && (<Text>{`Total number Of bidders: ${main.bidders.length}`}</Text>)
            }
            {!main.userId && (
              <Text style={{ color: 'red' }}>
                <Icon name="warning" style={{ color: 'red' }} />
                {`   Please login to Play and see bidding details`} {/* eslint-disable-line */}
              </Text>
            )}
          </Card>
        )}
        </View>
      </ScrollView>
    );
  }
}
export default ProductDetails;
