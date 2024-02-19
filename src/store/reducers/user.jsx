
import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  errorMessage: '',
  successMessage : '',
  token: '',
  isLogged: false,
  email: '',
  password: '',
  user : {},
};


export const changeEmailAndPassword = createAction('user/userData');
export const handleLogged = createAction('user/handleLogged');
export const saveToken = createAction('user/saveToken');
export const updateUser = createAction('user/updateUser');
export const sendSuccessMessage = createAction('user/sendSuccessMessage');
export const sendErrorMessage = createAction('user/sendErrorMessage');
export const logout = createAction('user/logout');


const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeEmailAndPassword, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(handleLogged, (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    })
    .addCase(saveToken, (state, action) => {
      localStorage.setItem("jwt", action.payload.token);
      state.isLogged = true;
      state.token = action.payload.token;
    })
    .addCase(updateUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(logout, (state) => {
      state.isLogged = false;
      state.token = "";
      state.password = null;
      state.email = null;
      state.user = {};
      localStorage.clear();
    })
    .addCase(sendSuccessMessage, (state, action) => {
      state.successMessage = action.payload;
    })
    .addCase(sendErrorMessage, (state, action) => {
      state.errorMessage = action.payload;
    })

});

export default userReducer;