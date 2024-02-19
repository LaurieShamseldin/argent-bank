import axios from 'axios';

import { handleLogged, sendErrorMessage, saveToken, updateUser, sendSuccessMessage } from '../store/reducers/user';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
});



export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { password } = state.user;
  const email = state.user.email.toLowerCase();

  try {
    await axiosInstance.post('user/login', {
      email,
      password,
    })
      .then((response) => {
        dispatch(saveToken({ token: response.data.body.token }));
      });
  }
  catch (e) {
    dispatch(sendErrorMessage('Votre mot de passe ou votre email est incorrect'));
    setTimeout(() => {
      dispatch(sendErrorMessage());
    }, 5000);
    console.log('Errorus Console-logus!!!', e);
  }
};


export const getUser = (token) => async (dispatch) => {

  try {
    const { data } = await axiosInstance.post('user/profile', {}, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      }
    });
    dispatch(handleLogged(data.body));
    console.log(data.body);
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

  
export const editUser = (firstName, lastName) => async (dispatch) => {
 const token = localStorage.getItem("jwt");
  try {
    const { data } = await axiosInstance.put('user/profile', {firstName, lastName}, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      }
    });
    dispatch(updateUser(data.body));
    dispatch(sendSuccessMessage("Vos informations ont bien été mises à jour."));
  }
  catch (e) {
    console.log('Dommage, ça n\'a pas marché', e);
  }
};

 

