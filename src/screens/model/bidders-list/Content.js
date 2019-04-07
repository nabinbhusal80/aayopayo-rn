import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';
import { SCREEN_HEIGHT } from '../../../config';

const styles = StyleSheet.create({
  tableStyle: { flexDirection: 'column' },
  rowStyle: { flexDirection: 'row', backgroundColor: '#f5f5f5' },
  columnStyle: { borderWidth: 0.5, borderColor: '#757575', padding: 5 },
});

const rowRenderHelper = (row, idx, userId, status) => (
  <View key={idx} style={[styles.rowStyle, { backgroundColor: idx % 2 === 0 ? '#fff' : '#f5f5f5' }]}>
    <View style={[styles.columnStyle, { flex: 0.1 }]}><Text>{idx + 1 }</Text></View>
    <View style={[styles.columnStyle, { flex: 0.8 }]}><Text style={{ color: userId.id === row.userid ? 'orange' : '#000' }}>{row.fullname}</Text></View>
    <View style={[styles.columnStyle, { flex: 0.1 }]}><Text>{ (userId.id === row.userid || status === 'end') ? row.bidamount : '*'}</Text></View>
  </View>
);

const Content = ({ main }) => {
  const { productDetails } = main;
  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <View style={{ backgroundColor: 'green', flexDirection: 'row' }}>
        <View style={[styles.columnStyle, { flex: 0.1 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>S.N</Text></View>
        <View style={[styles.columnStyle, { flex: 0.8 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>Name</Text></View>
        <View style={[styles.columnStyle, { flex: 0.1 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>Bid</Text></View>
      </View>
      <ScrollView contentContainerStyle={{ maxHeight: SCREEN_HEIGHT }}>
        {main.bidders.map((b, idx) => rowRenderHelper(b, idx, main.userId, productDetails.status))}
      </ScrollView>
    </View>
  );
};

export default Content;
Content.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
