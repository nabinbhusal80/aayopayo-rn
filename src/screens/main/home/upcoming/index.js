import React, { Component } from 'react';
import {
  View, ScrollView, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'native-base';
import UpcomingCard from './UpComingCard';

class Upcoming extends Component {
  state = {};

  render() {
    const { main, updateModalValue, navigation } = this.props;
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
              navigation.navigate('ViewMore', { title: 'Upcoming Products' });
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
Upcoming.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
