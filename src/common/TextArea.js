import React from 'react';
import PropTypes from 'prop-types';
import { Textarea } from 'native-base';

const CustomTextArea = ({ registerForm, content, updateFormValue }) => {
  return (
    <Textarea
      style={{ margin: 10, marginTop: 30 }}
      rowSpan={5}
      bordered
      placeholder={content.label}
      value={registerForm[content.value]}
      onChangeText={text => updateFormValue(content.value, text)}
    />
  );
};

CustomTextArea.propTypes = {
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};

export default CustomTextArea;
