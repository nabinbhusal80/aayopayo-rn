
let stateValue = {
  registerForm: { firstName: '', lastName: '', password: '' },
  loginForm: { userName: '', password: '' },
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.schema]: { ...state[action.schema], ...action.data },
  };
};

console.log(reducer(stateValue, { schema: 'registerForm', data: { firstName: 'bhagya' } }));
