import React from 'react';
import PropTyeps from 'prop-types';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';


const styles = idx => StyleSheet.create({
  renderRowStyle: {
    backgroundColor: idx % 2 !== 0 ? '#fff' : '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});

const renderRow = (item, idx) => (
  <View style={{ flexDirection: 'row' }} key={idx}>
    <Text style={{ fontSize: 20 }}>{item.label}</Text>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.value}</Text>
  </View>
);

const renderTableRow = (data, idx) => (
  <View style={styles(idx).renderRowStyle} key={idx}>
    {data.map((item, index) => renderRow(item, index))}
  </View>
);

const CustomTable = ({ dataArray }) => (
  <View>
    {dataArray.map((data, idx) => renderTableRow(data, idx))}
  </View>
);

CustomTable.propTypes = {
  dataArray: PropTyeps.arrayOf(PropTyeps.any).isRequired,
};

export default CustomTable;
