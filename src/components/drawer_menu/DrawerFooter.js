import React from 'react';
import { StyleSheet } from 'react-native';
import { Separator, Text } from 'native-base';

export default ({ footer }) => {
  return (
    <Separator style={styles.separatorStyle}>
      <Text style={styles.separatorTextStyle}>
        {footer.footerNote}
      </Text>
    </Separator>
  );
};

const styles = StyleSheet.create({
  separatorTextStyle: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  separatorStyle: {
    height: 75,
  },
});
