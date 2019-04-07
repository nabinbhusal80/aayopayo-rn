import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Separator, Text } from 'native-base';

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

const DrawerFooter = ({ footer }) => (
  <Separator style={styles.separatorStyle}>
    <Text style={styles.separatorTextStyle}>
      {footer.footerNote}
    </Text>
  </Separator>
);

export default DrawerFooter;
DrawerFooter.propTypes = {
  footer: PropTypes.objectOf(PropTypes.any).isRequired,
};
