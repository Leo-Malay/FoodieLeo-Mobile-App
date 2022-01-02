const CartReducer = (
  state = {isLoading: false, cart: undefined, err: undefined, suc: undefined},
  action,
) => {
  switch (action.type) {
    case 'CART_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'ADD_CART_SUCCESS':
      return {
        ...state,
        isLoading: false,
        cart: action.data.cart,
        suc: 'Added to Cart',
        trial: 0,
      };
    case 'REMOVE_CART_SUCCESS':
      return {
        ...state,
        isLoading: false,
        cart: action.data.cart,
        trial: 0,
      };

    case 'CART_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        cart: action.data.cart,
        trial: 0,
      };
    case 'CART_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: 'Unable to Fetch your Cart',
      };
    case 'ORDER_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        order: action.data,
        trial: 0,
      };
    case 'ORDER_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: action.data,
      };
    case 'ORDER_PLACE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        order_id: action.data,
        trial: 0,
      };
    case 'ORDER_PLACE_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: action.data,
        order_id: undefined,
      };
    case 'ORDER_CANCEL_SUCCESS':
      return {
        ...state,
        isLoading: false,
        order_id: action.data,
        trial: 0,
      };
    case 'ORDER_CANCEL_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: action.data,
        order_id: undefined,
      };
    case 'CART_UPDATE_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: 'Already in Cart',
      };
    case 'CART_REMOVAL_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: 'Unable to Remove Item from Cart',
      };
    case 'CLEAR_CART_ERRSUC':
      return {...state, err: undefined, suc: undefined};
    case 'CART_INC_TRIAL':
      return {...state, trial: state.trial + 1};
    default:
      return state;
  }
};

export default CartReducer;
