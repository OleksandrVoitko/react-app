const getIsLoggetIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;

const authSelectors = { getIsLoggetIn, getUserName };

export default authSelectors;
