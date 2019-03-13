import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';
import ClosedCard from './ClosedCard';
import { SCREEN_WIDTH } from '../../../../config';

class Closed extends Component {
  state = {};

  render() {
    const { main, updateModalValue } = this.props;
    // console.log('state in mainreducer', main);
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
              updateModalValue('viewMoreContent', 'closedProduct');
              updateModalValue('viewMore', true);
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
