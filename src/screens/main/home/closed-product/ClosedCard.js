import React, { Component } from 'react';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Card, Text  } from 'native-base';
import { SCREEN_WIDTH } from '../../../../config';
import DateTimeFormator from '../../../../common/functions/DateTimeFormator';

class ClosedCard extends Component {
  state = {};

  render() {
    const { product, navigation } = this.props;
    const { name, image, id, end_date, end_time } = product;
    return (
      <Card style={{ width: Math.floor(SCREEN_WIDTH / 2) - 10, height: 200 }}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', { id })}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              source={{ uri: image }}
              resizeMode="stretch"
              style={{
                width: '100%',
                height: 150,
              }}
            />
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: '100', color: 'black' }}>
              {name}
            </Text>
            <Text style={{ fontSize: 12, color: '#000', fontWeight: 'bold' }}>{`Ended On: ${DateTimeFormator(end_date, end_time, 'YYYY-MM-DD')} NPT`}</Text>
          </View>
        </ScrollView>
      </Card>
    );
  }
}

export default ClosedCard;
ClosedCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

