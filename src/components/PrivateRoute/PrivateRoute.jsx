import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes';

// If the route is private and the user is logged in - renders the component.
export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to={routes.loginNav} />;
}
