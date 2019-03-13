import React from 'react';
import { View, Text } from 'native-base';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';

const CustomDatePicker = ({ registerForm, updateFormValue }) => (
  <View style={{ flexDirection: 'row', marginLeft: 10 }}>
    <Text style={{ fontSize: 20, color: '#757575', marginTop: 5 }}>Date of birth:</Text>
    <DatePicker
      mode="date"
      placeholder="select date"
      format="YYYY/MM/DD"
      minDate="1960-1-1"
      androidMode="spinner"
      date={registerForm.dob}
      maxDate="2060-1-1"
      customStyles={{
        dateInput: { marginLeft: 10, borderWidth: 0 },
        dateText: { color: 'green' },
      }}
      confirmBtnText="Ok"
      cancelBtnText="cancel"
      onDateChange={date => updateFormValue('dob', date)}
    />
  </View>
);
CustomDatePicker.propTypes = {
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
};

export default CustomDatePicker;
