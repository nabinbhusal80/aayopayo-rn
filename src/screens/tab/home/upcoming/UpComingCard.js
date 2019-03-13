import React, { Component } from 'react';
import { Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { Card, Text, Button } from 'native-base';
import DateTimeFormator from '../../../../common/functions/DateTimeFormator';
import { SCREEN_WIDTH } from '../../../../config';

class LiveCarde extends Component {
  state = {};

  render() {
    const { product, updateMainValue } = this.props;
    const { name, image, id, start_date, start_time } = product;
    return (
      <Card style={{ width: Math.floor(SCREEN_WIDTH / 2) - 10, height: 200, flexWrap: 'wrap'}}>
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
          <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: '100', color: 'black' }}>
              {name}
            </Text>
            <Text style={{ fontSize: 12, color: '#000', fontWeight: 'bold' }}>{DateTimeFormator(start_date, start_time, 'YYYY-MM-DD hh:mm a')}</Text>
          </View>
        </ScrollView>
      </Card>
    );
  }
}
export default LiveCarde;
