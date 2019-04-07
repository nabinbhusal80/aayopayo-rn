import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label, Input } from 'native-base';

const CustomInput = ({ content, registerForm, updateFormValue }) => {

  return (
    <Item floatingLabel last={content.last === 'last'}>
      <Label>{content.label}</Label>
      <Input
        keyboardType={content.keyboardType}
        secureTextEntry={(content.value === 'password') || (content.value === 'cpassword')}
        value={registerForm[content.value]}
        onChangeText={text => updateFormValue(content.value, text)}
      />
    </Item>
  );
};

CustomInput.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};

export default CustomInput;
