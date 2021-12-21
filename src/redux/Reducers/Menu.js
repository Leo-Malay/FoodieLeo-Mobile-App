const MenuReducer = (
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
        menu: action.data,
        suc: action.data.msg,
      };
    case 'PRODUCT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        suc: action.data.msg,
        data: action.data.data,
      };
    case 'SET_PRODUCT':
      return {
        ...state,
        product: action.data,
      };
    case 'MENU_FAILURE':
    case 'PRODUCT_FAILURE':
      return {
        ...state,
        isLoading: false,
        err: action.data.msg,
      };
    case 'CLEAR_MENU_ERROR_SUCCESS':
      return {...state, err: undefined, suc: undefined};
    default:
      return state;
  }
};

export default MenuReducer;
