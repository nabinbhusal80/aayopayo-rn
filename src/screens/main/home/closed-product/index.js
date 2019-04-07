import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import PropTypes from 'prop-types';
import ClosedCard from './ClosedCard';
import { SCREEN_WIDTH } from '../../../../config';

class Closed extends Component {
  state = {};

  render() {
    const { main, updateModalValue, navigation } = this.props;
    return (
      <Card style={{
        padding: 2,
        shadowColor: '#fff',
        margin: 5,
        backgroundColor: 'white',
      }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
        >
          <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: '#000', fontWeight: 'bold'}}>Closed</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ViewMore', { title: 'Close Products' });
              updateModalValue('viewMoreContent', 'closedProduct');
            }}
          >
            <Text style={{ fontSize: 13, textDecorationLine: 'underline', marginRight: 5, marginLeft: 5, color: '#00B0FF' }}>View More</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: SCREEN_WIDTH,
            flexWrap: 'wrap',
            backgroundColor: '#white',
            padding: 0,
          }}
        >
          {main.closedProduct.map((product, idx) => <ClosedCard key={idx} product={product} {...this.props} />)}
        </View>
      </Card>
    );
  }
}
export default Closed;

Closed.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
