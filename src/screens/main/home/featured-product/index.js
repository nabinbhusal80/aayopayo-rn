import React from 'react';
import {
  View, Text, Thumbnail, Badge,
} from 'native-base';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

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

const contentHelper = (details, idx, navigation) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('ProductDetails', { id: details.id })}
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
        <Text style={{ fontSize: 10, alignSelf: 'center' }}>{statusRenderHelper(details.status)}</Text>
      </Badge>
      {/* <Text style={{ fontSize: 10, alignSelf: 'center', color: '#fff' }}>{details.name}</Text> */}
    </View>
  </TouchableOpacity>
);


const index = ({ main, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        {main.featuredProduct.map((details, idx) => contentHelper(details, idx, navigation))}
      </ScrollView>
    </View>
  );
};

export default index;
index.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
