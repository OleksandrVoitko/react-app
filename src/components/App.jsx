import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { lazy } from 'react';

import routes from '../routes';
import authOperations from '../redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import { Loader } from './Loader/Loader';
import PublicRoute from './PublicRoute';
import authSelectors from '../redux/auth/authSelectors';

const SharedLoyout = lazy(() => import('../pages/SharedLoyout'));
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const SingUp = lazy(() => import('../pages/SingUp'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path={routes.home} element={<SharedLoyout />}>
            <Route index element={<Home />} />
            <Route
              path={routes.contacts}
              element={
                <PrivateRoute redirectPath="/login" isLoggedIn={isLoggedIn}>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.singUp}
              element={
                <PublicRoute redirectPath="/contacts" isLoggedIn={isLoggedIn}>
                  <SingUp />
                </PublicRoute>
              }
            ></Route>
            <Route
              path={routes.login}
              element={
                <PublicRoute redirectPath="/contacts" isLoggedIn={isLoggedIn}>
                  <Login />
                </PublicRoute>
              }
            ></Route>
            <Route path={routes.login} element={<Login />} />
          </Route>
        </Routes>
      )}
    </Suspense>
  );
}

export default App;
