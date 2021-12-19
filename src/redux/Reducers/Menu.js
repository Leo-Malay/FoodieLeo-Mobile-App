const CartReducer = (
  state = {isLoading: false, cart: [], err: undefined, suc: undefined},
  action,
) => {
  switch (action.type) {
    case 'MENU_REQUEST':
      return {...state, isLoading: true};
    case 'MENU_SUCCESS':
      return {
        ...state,
        isLoading: false,
        cart: action.data.cart,
        suc: action.data.msg,
      };
    case 'MENU_FAILURE':
      return {
        ...state,
        isLoading: false,
        cart: action.data.cart,
        err: action.data.msg,
      };
    case 'CLEAR_MENU_ERROR_SUCCESS':
      return {...state, err: undefined, suc: undefined};
    default:
      return state;
  }
};

export default CartReducer;
