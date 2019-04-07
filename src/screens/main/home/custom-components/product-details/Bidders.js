import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import PropTypes from 'prop-types';

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

const Bidders = ({ bidders, userId, status }) => {
  // console.log('userId in bidders', userId);
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ backgroundColor: 'green', flexDirection: 'row' }}>
        <View style={[styles.columnStyle, { flex: 0.1 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>S.N</Text></View>
        <View style={[styles.columnStyle, { flex: 0.8 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>Name</Text></View>
        <View style={[styles.columnStyle, { flex: 0.1 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>Bid</Text></View>
      </View>
      <View>
        {bidders.map((b, idx) => idx < 5 && rowRenderHelper(b, idx, userId, status))}
      </View>
    </View>
  );
};
export default Bidders;
Bidders.propTypes = {
  bidders: PropTypes.arrayOf(PropTypes.any).isRequired,
  userId: PropTypes.objectOf(PropTypes.any).isRequired,
  status: PropTypes.string.isRequired,
};
