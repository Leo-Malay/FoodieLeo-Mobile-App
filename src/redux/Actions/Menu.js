import axios from 'axios';
const url = 'https://leomalay-backend.herokuapp.com';

const errHandler = (type, dispatch) => {
  dispatch({
    type,
    data: 'Unable to connect to server',
  });
};
export const Menu = (city, state, country) => async dispatch => {
  dispatch({type: 'MENU_REQUEST'});
  try {
    const res = await axios.get(url + '/Foodie/Menu', {
      params: {city, state, country},
      withCredentials: true,
    });
    if (res.data.success) dispatch({type: 'MENU_SUCCESS', data: res.data.data});
    else dispatch({type: 'MENU_FAILURE', data: res.data.msg});
  } catch (error) {
    errHandler('MENU_FAILURE', dispatch);
  }
};
export const Product = soldBy => async dispatch => {
  dispatch({type: 'MENU_REQUEST'});
  try {
    const res = await axios.get(url + '/Foodie/Product', {
      params: {soldBy},
      withCredentials: true,
    });
    if (res.data.success) dispatch({type: 'PRODUCT_SUCCESS', data: res.data});
    else dispatch({type: 'PRODUCT_FAILURE', data: res.data.msg});
  } catch (error) {
    errHandler('PRODUCT_FAILURE', dispatch);
  }
};
