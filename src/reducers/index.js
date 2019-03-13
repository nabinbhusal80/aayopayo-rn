import { combineReducers } from 'redux';
import registerFormReducer from './registerFormReducer';
import modalReducer from './modalReducer';
import mainReducer from './mainReducer';

export default combineReducers({
  registerForm: registerFormReducer,
  modal: modalReducer,
  main: mainReducer,
});
