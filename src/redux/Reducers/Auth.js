const AuthReducer = (
  state = {isLoading: false, isAuthenticated: false},
  action,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AuthReducer;
