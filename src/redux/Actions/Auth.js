import axios from 'axios';
const url = 'https://leomalay-backend.herokuapp.com';

const errHandler = (type, dispatch) => {
  dispatch({
    type,
    data: 'Unable to connect to server',
  });
};
export const login = (username, password) => async dispatch => {
  dispatch({type: 'AUTH_REQUEST'});
  try {
    const res = await axios.post(
      url + '/Auth/Login',
      {username, password},
      {
        withCredentials: true,
      },
    );
    if (res.data.success) dispatch({type: 'LOGIN_SUCCESS'});
    else dispatch({type: 'LOGIN_FAILURE', data: res.data.msg});
  } catch (error) {
    errHandler('LOGIN_FAILURE', dispatch);
  }
};
export const logout = () => async dispatch => {
  dispatch({type: 'AUTH_REQUEST'});
  try {
    const res = await axios.get(url + '/Auth/Logout', {
      withCredentials: true,
    });
    if (res.data.success) dispatch({type: 'LOGOUT_SUCCESS'});
    else dispatch({type: 'LOGOUT_FAILURE', data: res.data.msg});
  } catch (error) {
    errHandler('LOGOUT_FAILURE', dispatch);
  }
};
export const newAccount =
  (fname, lname, email, username, password) => async dispatch => {
    dispatch({type: 'AUTH_REQUEST'});
    try {
      const res = await axios.post(
        url + '/Auth/NewAccount',
        {fname, lname, email, username, password},
        {
          withCredentials: true,
        },
      );
      if (res.data.success)
        dispatch({type: 'NEW_ACCOUNT_SUCCESS', data: res.data.data});
      else dispatch({type: 'NEW_ACCOUNT_FAILURE', data: res.data.msg});
    } catch (error) {
      errHandler('NEW_ACCOUNT_FAILURE', dispatch);
    }
  };
export const Account = () => async dispatch => {
  dispatch({type: 'AUTH_REQUEST'});
  try {
    const res = await axios.get(url + '/Auth/Account', {
      withCredentials: true,
    });
    if (res.data.success)
      dispatch({type: 'ACCOUNT_FETCH_SUCCESS', data: res.data.data});
    else dispatch({type: 'ACCOUNT_FETCH_FAILURE', data: res.data.msg});
  } catch (error) {
    errHandler('ACCOUNT_FETCH_FAILURE', dispatch);
  }
};
export const updateAccount =
  (al1, al2, city, state, country, pincode) => async dispatch => {
    dispatch({type: 'AUTH_REQUEST'});
    try {
      const res = await axios.put(
        url + '/Auth/UpdateAccount',
        {al1, al2, city, state, country, pincode},
        {
          withCredentials: true,
        },
      );
      if (res.data.success) {
        dispatch(Account());
        dispatch({
          type: 'UPDATE_ACCOUNT_SUCCESS',
          data: res.data.msg,
        });
      } else
        dispatch({
          type: 'UPDATE_ACCOUNT_FAILURE',
          data: res.data.msg,
        });
    } catch (error) {
      errHandler('UPDATE_ACCOUNT_FAILURE', dispatch);
    }
  };
export const updatePassword = (password, newPassword) => async dispatch => {
  dispatch({type: 'AUTH_REQUEST'});
  try {
    const res = await axios.put(
      url + '/Auth/UpdatePassword',
      {password, newPassword},
      {
        withCredentials: true,
      },
    );
    if (res.data.success)
      dispatch({
        type: 'UPDATE_PASSWORD_SUCCESS',
        data: res.data.msg,
      });
    else dispatch({type: 'UPDATE_PASSWORD_FAILURE', data: res.data.msg});
  } catch (error) {
    errHandler('UPDATE_PASSWORD_FAILURE', dispatch);
  }
};
export const removeAccount = password => async dispatch => {
  dispatch({type: 'AUTH_REQUEST'});
  try {
    const res = await axios.delete(url + '/Auth/RemoveAccount', {
      data: {password},
      withCredentials: true,
    });
    if (res.data.success)
      dispatch({
        type: 'REMOVE_ACCOUNT_SUCCESS',
      });
    else dispatch({type: 'REMOVE_ACCOUNT_FAILURE', data: res.data.msg});
  } catch (error) {
    errHandler('REMOVE_ACCOUNT_FAILURE', dispatch);
  }
};
