import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { View, Text, Card } from 'native-base';
import { SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../config';

export default (props) => {
  const { main, updateMainValue } = props;
  return (
    <Card style={{
      padding: 2,
      margin: 5,
      backgroundColor: 'white',
    }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: 'white'}}>
        <Text style={{ fontSize: 15, marginRight: 5, marginLeft: 5, color: '#000', fontWeight: 'bold' }}>Bumper</Text>
      </View>
      <TouchableOpacity
        onPress={() => updateMainValue('showProductDetails', main.bumperProduct.pid)}
        style={{
          width: SCREEN_WIDTH,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={{ uri: main.bumperProduct.image }}
          style={{
            height: 300,
            width: SCREEN_WIDTH * 0.98,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    </Card>
  );
};
