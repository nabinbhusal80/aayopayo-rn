import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, TouchableOpacity, ScrollView,
} from 'react-native';
import { Card, Text } from 'native-base';
import { SCREEN_WIDTH } from '../../../../config';
import Timer from './Timer';

class LiveCarde extends Component {
  state = {};

  render() {
    const { product, updateMainValue, navigation } = this.props;
    const { name, image, id, end_date, end_time } = product; //eslint-disable-line
    return (
      <Card style={{ width: Math.floor(SCREEN_WIDTH / 2) - 10, height: 200 }}>
        <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{ justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              navigation.navigate('ProductDetails', { id, props: this.props });
              // updateMainValue('showProductDetails', id)
            }}
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

LiveCarde.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};

export default LiveCarde;
