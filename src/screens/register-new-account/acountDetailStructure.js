
export default () => {
  return [
    { element: 'input', label: 'Name', value: 'full_name' },
    { element: 'input', label: 'Email Address', value: 'email' },
    { element: 'input', label: 'Password', value: 'password' },
    { element: 'input', label: 'Verify Password', last: 'last', value: 'cpassword' },
    { element: 'button', label: 'Next' },
  ];
};
