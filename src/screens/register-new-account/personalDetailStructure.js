
export default () => {
  return [
    {
      element: 'radio-group',
      label: 'Gender',
      groupContent: [
        {
          element: 'radio', label: 'Male', key: 'gender', value: 'male',
        },
        {
          element: 'radio', label: 'Female', value: 'female', key: 'gender',
        },
      ],
    },
    {
      element: 'selection',
      label: 'State :',
      onValueChange: null,
      selectionList: [
        { label: 'State 1', value: 'state1' },
        { label: 'State 2', value: 'state2' },
        { label: 'State 3', value: 'state3' },
        { label: 'State 4', value: 'state4' },
        { label: 'State 5', value: 'state5' },
        { label: 'State 6', value: 'state6' },
        { label: 'State 7', value: 'state7' },
      ],
    },
    { element: 'date-picker', label: 'Date of birth' },
    { element: 'input', label: 'Mobile Number', value: 'phone_number' },
    {
      element: 'checkbox',
      value: 'agree',
      clickableText: 'Terms and Conditions',
      nonClickableText: 'I have read and agreed to the ',
    },
    { element: 'button', label: 'Submit' },
  ];
};
