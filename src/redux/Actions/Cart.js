import axios from 'axios';
const url = 'https://leomalay-backend.herokuapp.com';

const errHandler = (type, dispatch) => {
  dispatch({
    type,
    data: 'Unable to connect to server',
  });
};
export const Cart = () => async dispatch => {
  await dispatch({type: 'CART_REQUEST'});
  try {
    const res = await axios.get(url + '/Foodie/Cart', {
      withCredentials: true,
    });
    if (res.data.success)
      dispatch({type: 'CART_FETCH_SUCCESS', data: res.data.data});
    else dispatch({type: 'CART_FETCH_FAILURE'});
  } catch (error) {
    dispatch({type: 'CART_FETCH_FAILURE'});
  }
};
export const AddCart =
  (productId, qty = 1) =>
  async dispatch => {
    await dispatch({type: 'CART_REQUEST'});
    try {
      const res = await axios.post(
        url + '/Foodie/AddCart',
        {productId, qty},
        {withCredentials: true},
      );
      if (res.data.success)
        dispatch({type: 'ADD_CART_SUCCESS', data: res.data.data});
      else dispatch({type: 'CART_UPDATE_FAILURE'});
    } catch (error) {
      dispatch({type: 'CART_UPDATE_FAILURE'});
    }
  };
export const RemoveCart = productId => async dispatch => {
  await dispatch({type: 'CART_REQUEST'});
  try {
    const res = await axios.delete(url + '/Foodie/RemoveCart', {
      data: {productId},
      withCredentials: true,
    });
    if (res.data.success)
      dispatch({type: 'REMOVE_CART_SUCCESS', data: res.data.data});
    else dispatch({type: 'CART_REMOVE_FAILURE'});
  } catch (error) {
    dispatch({type: 'CART_REMOVE_FAILURE'});
  }
};
export const Order = () => async dispatch => {
  try {
    const res = await axios.get(url + '/Foodie/Order', {
      withCredentials: true,
    });
    if (res.data.success)
      dispatch({type: 'ORDER_FETCH_SUCCESS', data: res.data.data});
    else dispatch({type: 'ORDER_FETCH_FAILURE'});
  } catch (error) {
    dispatch({type: 'ORDER_FETCH_FAILURE'});
  }
};
export const PlaceOrder =
  (
    payId = 'CC1234',
    payDate = Date.now(),
    payType = 'CreditCard',
    payAmount,
    address,
  ) =>
  async dispatch => {
    try {
      const res = await axios.post(
        url + '/Foodie/PlaceOrder',
        {payId, payDate, payType, payAmount, address},
        {
          withCredentials: true,
        },
      );
      if (res.data.success)
        dispatch({type: 'ORDER_PLACE_SUCCESS', data: res.data.data});
      else dispatch({type: 'ORDER_PLACE_FAILURE', data: res.data.msg});
    } catch (error) {
      dispatch({
        type: 'ORDER_PLACE_FAILURE',
        data: 'Unable to Place Order',
      });
    }
  };
export const CancelOrder = orderId => async dispatch => {
  try {
    const res = await axios.post(
      url + '/Foodie/CancelOrder',
      {orderId},
      {
        withCredentials: true,
      },
    );
    if (res.data.success)
      dispatch({type: 'ORDER_CANCEL_SUCCESS', data: res.data.data});
    else dispatch({type: 'ORDER_CANCEL_FAILURE', data: res.data.msg});
  } catch (error) {
    dispatch({
      type: 'ORDER_CANCEL_FAILURE',
      data: 'Unable to Cancel Order',
    });
  }
};
