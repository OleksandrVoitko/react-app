const getUserName = state => state.auth.user.name;
const getIsLoggetIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

// eslint-disable-next-line
export default { getIsLoggetIn, getUserName, getIsFetchingCurrentUser };
