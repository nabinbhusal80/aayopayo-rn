import React, { Component } from 'react';
import { Image, View , TouchableOpacity, ScrollView } from 'react-native';
import { Card, CardItem, Text, Left, Body, Button } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';
import Timer from './Timer';

class LiveCarde extends Component {
  state = {};

  render() {
    const { product, updateMainValue, navigation } = this.props;
    const { name, image, id, end_date, end_time } = product;
    return (
      <Card style={{ width: Math.floor(SCREEN_WIDTH / 2) - 10, height: 200 }}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => updateMainValue('showProductDetails', id)}
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
            <Timer endDate={end_date} endTime={end_time} context={this.context} name={name} />
          </View>
        </ScrollView>
      </Card>
    );
  }
}
export default LiveCarde;
