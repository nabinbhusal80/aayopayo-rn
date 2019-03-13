import React from 'react';
import PropTypes from 'prop-types';
import { Radio, View, Text } from 'native-base';

const RadioGroup = ({ content, registerForm, updateFormValue }) => {
  const renderRadioButtonHelper = contentGroup => contentGroup.map((radio) => {
    const gender = registerForm[radio.key] === radio.value;
    return (
      <View style={{ flexDirection: 'row', margin: 10 }} key={radio.label}>
        <Radio
          style={{ marginRight: 5 }}
          color={gender ? 'green' : '#000'}
          selected={gender}
          selectedColor={gender ? 'green' : '#000'}
          onPress={() => updateFormValue('gender', radio.value)}
        />
        <Text
          style={{
            color: gender ? 'green' : '#000',
          }}
        >
          {radio.label}
        </Text>
      </View>
    );
  });

  return (
    <View style={{ flexDirection: 'column', marginTop: 10 }}>
      <Text
        style={{
          fontSize: 20, color: '#757575', marginLeft: 10,
        }}
      >
        {content.label}
      </Text>
      <View style={{
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderWidth: 0.5,
        borderColor: '#757575',
      }}
      >
        {renderRadioButtonHelper(content.groupContent)}
      </View>
    </View>
  );
};

RadioGroup.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};

export default RadioGroup;