import { UPDATE_FORM_VALUE } from './types';
import { nextButtonPressHelper, submitButtonPressHelper, agreeCheckBoxPressHelper } from './helper-functions/registerFormHelper';
import {
  signInButtonPressHandler,
  rememberCheckBoxPressHelper,
  resetButtonPressHelper,
  submitMessageButtonPressHelper,
  changePasswordButtonPressHelper,
  signOutButtonPressHandler,
} from './helper-functions/signInFormHandler';
import { updateMainValue } from './fetchInitialAppData';
import { updateModalValue } from './ModalHandler';

export const updateFormValue = (key, value) => (
  {
    type: UPDATE_FORM_VALUE,
    payload: { key, value },
  });

export const buttonPressHandler = (content, navigation) => (
  async (dispatch, getState) => {                                 //eslint-disable-line
    const button = content.label.replace(/\s/g, '');
    switch (button) {
      case 'Next':
        nextButtonPressHelper(getState(), navigation, dispatch, updateFormValue);
        break;
      case 'Submit':
        submitButtonPressHelper(getState(), dispatch, updateFormValue, navigation);
        break;
      case 'SignIn':
        signInButtonPressHandler(getState(), dispatch, navigation, updateFormValue, updateMainValue);
        break;
      case 'ResetPassword':
        resetButtonPressHelper(getState(), dispatch, navigation, updateFormValue);
        break;
      case 'SubmitMessage':
        submitMessageButtonPressHelper(getState(), dispatch, navigation, updateFormValue);
        break;
      case 'ChangePassword':
        changePasswordButtonPressHelper(getState(), dispatch, navigation, updateFormValue, updateMainValue, updateModalValue);
        break;
      case 'SignOut':
        signOutButtonPressHandler(getState(), dispatch, navigation, updateFormValue, updateMainValue);
        break;
      default:
        return null;
    }
  });

export const checkBoxPressHandler = (content, navigation) => (
  async (dispatch, getState) => {                                       //eslint-disable-line
    switch (content.value) {
      case 'agree':
        agreeCheckBoxPressHelper(getState(), dispatch, content, navigation, updateFormValue);
        break;
      case 'remember':
        rememberCheckBoxPressHelper(getState(), dispatch, content, navigation, updateFormValue);
        break;
      default:
        return null;
    }
  }
);
