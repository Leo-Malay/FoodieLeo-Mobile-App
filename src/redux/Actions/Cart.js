const Cart = () => async dispatch => {
  await dispatch({type: 'CART_REQUEST'});
  await dispatch({
    type: 'CART_FETCH_SUCCESS',
    data: {cart: [], msg: undefined},
  });
};
const AddCart = (item_id, qty, cost) => async dispatch => {
  await dispatch({type: 'CART_REQUEST'});
};
const RemoveCart = item_id => async dispatch => {
  await dispatch({type: 'CART_REQUEST'});
};
