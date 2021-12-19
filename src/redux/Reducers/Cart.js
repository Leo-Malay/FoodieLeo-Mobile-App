const CartReducer = (
  state = {isLoading: false, cart: [], err: undefined, suc: undefined},
  action,
) => {
  switch (action.type) {
    case 'CART_REQUEST':
      return {...state, isLoading: true};
    case 'ADD_CART_SUCCESS':
    case 'REMOVE_CART_SUCCESS':
      return {
        ...state,
        isLoading: false,
        cart: action.data.cart,
        suc: action.data.msg,
      };
    case 'ADD_CART_FAILURE':
    case 'REMOVE_CART_FAILURE':
      return {
        ...state,
        isLoading: false,
        cart: action.data.cart,
        err: action.data.msg,
      };
    case 'CLEAR_CART_ERROR_SUCCESS':
      return {...state, err: undefined, suc: undefined};
    default:
      return state;
  }
};

export default CartReducer;
