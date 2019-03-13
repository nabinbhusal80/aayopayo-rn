import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import UpcomingCard from './UpComingCard';
import { APP_COLOR } from '../../../../config';

class Upcoming extends Component {
  state = {};

  render() {
    const { main, updateModalValue } = this.props;
    // console.log('state in mainreducer', main);
    return (
      <Card style={{
        padding: 2,
        height: 260,
        shadowColor: '#fff',
        margin: 5,
        backgroundColor: 'white',
      }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: '#000000', fontWeight: 'bold' }}>Upcoming</Text>
          <TouchableOpacity
            onPress={() => {
              updateModalValue('viewMore', true);
              updateModalValue('viewMoreContent', 'upcomingProduct');
            }}
          >
            <Text style={{ fontSize: 13, textDecorationLine: 'underline', marginRight: 5, marginLeft: 5, color: '#00B0FF' }}>View More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#white', padding: 0 }}>
          {main.upcomingProduct.map((product, idx) => <UpcomingCard key={idx} product={product} {...this.props} />)}
        </ScrollView>
      </Card>
    );
  }
}
export default Upcoming;
