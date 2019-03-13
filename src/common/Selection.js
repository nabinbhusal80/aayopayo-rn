import React from 'react';
import PropTypes from 'prop-types';
import {
  Picker, Icon, Text, View,
} from 'native-base';

const Selection = ({ content, registerForm, updateFormValue }) => {
  const renderSelectionHander = selectionList => selectionList.map(selection => (
    <Picker.Item label={selection.label} value={selection.value} key={selection.label} />));

  return (
    <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 10 }}>
      <Text style={{ fontSize: 20, color: '#757575' }}>{content.label}</Text>
      <Picker
        note
        mode="dropdown"
        style={{ marginTop: -10, color: 'green' }}
        iosHeader="Select State"
        iosIcon={<Icon name="arrow-dropdown" style={{ color: 'green' }} />}
        selectedValue={registerForm.state}
        onValueChange={value => updateFormValue('state', value)}
      >
        {renderSelectionHander(content.selectionList)}
      </Picker>
    </View>
  );
};

Selection.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};
export default Selection;
