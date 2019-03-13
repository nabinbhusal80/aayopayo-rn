import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Text } from 'native-base';

const rowRenderHelper = (row, idx, userId) => (
  <View key={idx} style={[styles.rowStyle, { backgroundColor: idx % 2 === 0 ? '#fff' : '#f5f5f5' }]}>
    <View style={[styles.columnStyle, { flex: 0.1 }]}><Text>{idx + 1 }</Text></View>
    <View style={[styles.columnStyle, { flex: 0.8 }]}><Text style={{ color: userId.id === row.userid ? 'orange' : '#000' }}>{row.fullname}</Text></View>
    <View style={[styles.columnStyle, { flex: 0.1 }]}><Text>{ userId.id === row.userid ? row.bidamount : '*'}</Text></View>
  </View>
);

export default ({ bidders, userId }) => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={{ backgroundColor: 'green', flexDirection: 'row' }}>
        <View style={[styles.columnStyle, { flex: 0.1 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>S.N</Text></View>
        <View style={[styles.columnStyle, { flex: 0.8 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>Name</Text></View>
        <View style={[styles.columnStyle, { flex: 0.1 }]}><Text style={{ color: 'white', fontWeight: 'bold' }}>Bid</Text></View>
      </View>
      <View>
        {bidders.map((b, idx) => idx < 5 && rowRenderHelper(b, idx, userId))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tableStyle: { flexDirection: 'column' },
  rowStyle: { flexDirection: 'row', backgroundColor: '#f5f5f5' },
  columnStyle: { borderWidth: 0.5, borderColor: '#757575', padding: 5 },
});
