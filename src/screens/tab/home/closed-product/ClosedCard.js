import React, { Component } from 'react';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Card, Text, Button } from 'native-base';
import { SCREEN_WIDTH } from '../../../../config';
import DateTimeFormator from '../../../../common/functions/DateTimeFormator';

class ClosedCard extends Component {
  state = {};

  render() {
    const { product, updateMainValue } = this.props;
    const { name, image, id, end_date, end_time } = product;
    return (
      <Card style={{ width: Math.floor(SCREEN_WIDTH / 2) - 10, height: 200 }}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <TouchableOpacity
            onPress={() => updateMainValue('showProductDetails', id)}
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
