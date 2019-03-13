import React from 'react';
import { View, Text, Thumbnail, Badge } from 'native-base';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';


const statusRenderHelper = (status) => {
  switch (status) {
    case 'up':
      return 'Upcoming';
    case 'live':
      return 'Live';
    case 'end':
      return 'Closed';
    default:
      return null;
  }
};

const contentHelper = (details, idx, updateMainValue) => {
  return (
    <TouchableOpacity
      onPress={() => updateMainValue('showProductDetails', details.id)}
      key={idx}
      style={{
        backgroundColor: 'white',
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderWidth: 2,
        borderColor: '#757575',
      }}
    >
      <Thumbnail source={{ uri: details.image }} style={{ width: 80, height: 80, borderRadius: 40 }} />
      <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
        <Badge style={{ alignSelf: 'center', backgroundColor: 'orange', zIndex: 5, height: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 10, textAlign: 'left' }}>{statusRenderHelper(details.status)}</Text>
        </Badge>
        {/* <Text style={{ fontSize: 10, alignSelf: 'center', color: '#fff' }}>{details.name}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default ({ main, updateMainValue }) => {
  return (
    <View style={styles.container}>
      {/* <View style={{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        position: 'absolute',
        zIndex: 5,
        backgroundColor: '#FFA500',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      }}
      >
        <Text style={{ color: '#fff', fontSize: 15, marginRight: 5, marginLeft: 5 }}>Featured</Text>
      </View> */}
      <ScrollView nestedScrollEnabled horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{justifyContent: "center", alignItems: "center"}}>
        {main.featuredProduct.map((details, idx) => contentHelper(details, idx, updateMainValue))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: 100,
    borderBottomWidth: 1,
    marginTop: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    elevation: 1,
    borderBottomColor: '#f5f5f5',
    flexDirection: 'row',
    marginBottom: 5,
  },
});
