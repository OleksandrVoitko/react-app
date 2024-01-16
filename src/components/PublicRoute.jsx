import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, isLoggedIn, redirectPath }) {
  return isLoggedIn ? <Navigate to={redirectPath} replace /> : children;
}
