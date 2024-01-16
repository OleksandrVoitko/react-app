import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, isLoggedIn, redirectPath }) {
  return isLoggedIn ? children : <Navigate to={redirectPath} replace />;
}
