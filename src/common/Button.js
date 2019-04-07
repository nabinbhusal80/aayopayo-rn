import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Text, View, Spinner,
} from 'native-base';

const CustomButtom = ({
  content, navigation, registerForm, buttonPressHandler,
}) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ justifyContent: 'center', alignItems: 'center', height: 'auto', padding: 10, margin: 5 }}>
      { registerForm.error !== '' ? <Text style={{ color: 'red' }}>{registerForm.error}</Text> : null }
      {registerForm.loading ? <Spinner size="large" /> : null}
      {registerForm.success !== '' ? <Text style={{ color: 'green' }}>{registerForm.success}</Text> : null }
    </View>
    <Button
      disabled={!registerForm.internetStatus}
      danger
      full
      onPress={() => buttonPressHandler(content, navigation)}
    >
      <Text uppercase={false}>{content.label}</Text>
    </Button>
  </View>
);

CustomButtom.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  buttonPressHandler: PropTypes.func.isRequired,
};
export default CustomButtom;
