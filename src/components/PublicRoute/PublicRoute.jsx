import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import authSelectors from '../../redux/auth/authSelectors';
import routes from '../../routes';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);
  return isLoggedIn ? <Navigate to={routes.contactsNav} /> : children;
}
