import axios from 'axios';
import querystring from 'querystring';

export const nextButtonPressHelper = (state, navigation, dispatch, updateFormValue) => {
  const { full_name, email, password, cpassword } = state.registerForm; //eslint-disable-line
  if ((full_name !== '') && (email !== '') && (password !== '') && (cpassword !== '')) { //eslint-disable-line
    if (password === cpassword) {
      navigation.navigate('PersonalDetails');
      dispatch(updateFormValue('error', ''));
    } else {
      dispatch(updateFormValue('error', 'Password mismatch'));
    }
  } else {
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};

export const submitButtonPressHelper = async (states, dispatch, updateFormValue, navigation) => {
  dispatch(updateFormValue('success', ''));
  dispatch(updateFormValue('error', ''));
  dispatch(updateFormValue('loading', false));
  const { full_name, email, gender, phone_number, state, password, cpassword, dob, agree } = states.registerForm; //eslint-disable-line
  dispatch(updateFormValue('loading', true));
  if ((dob !== '') && (phone_number !== '') && agree) { //eslint-disable-line
    try {
      const response = await axios({
        method: 'post',
        url: 'https://www.aayopayo.com/app_signup.php',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: querystring.stringify({
          fname: full_name,
          uemail: email,
          npass: password,
          vpass: cpassword,
          dob,
          gender,
          mnumber: phone_number,
          pstate: state,
          agree,
        }),
      });
      // console.log('signup response data', response.data);
      dispatch(updateFormValue('loading', false));
      if (!response.data.error) {
        dispatch(updateFormValue('success', response.data.success_message));
        dispatch(updateFormValue('full_name', ''));
        dispatch(updateFormValue('email', ''));
        dispatch(updateFormValue('password', ''));
        dispatch(updateFormValue('cpassword', ''));
        dispatch(updateFormValue('phone_number', ''));
        dispatch(updateFormValue('error', ''));
        dispatch(updateFormValue('dob', ''));
        // navigation.navigate('SignIn');
      } else {
        dispatch(updateFormValue('error', response.data.message));
      }
    } catch (e) {
      dispatch(updateFormValue('error', 'Form submit failed'));
    }
  } else {
    dispatch(updateFormValue('loading', false));
    dispatch(updateFormValue('error', 'Fill all the fields'));
  }
};

export const agreeCheckBoxPressHelper = (state, dispatch, content, navigation, updateFormValue) => {
  dispatch(updateFormValue('agree', !state.registerForm[content.value]));
};
