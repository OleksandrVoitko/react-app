import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';

// import Contacts from '../pages/Contacts/Contacts';
// import TodoList from '../pages/TodoList/TodoList';
// import SharedLoyout from '../pages/SharedLoyout';
// import Login from '../pages/Login';
// import SingUp from '../pages/SingUp';
// import Home from '../pages/Home';

import routes from '../routes';
import authOperations from '../redux/auth/authOperations';
import PrivateRoute from './rederect/PrivateRoute';

const SharedLoyout = lazy(() => import('../pages/SharedLoyout'));
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const TodoList = lazy(() => import('../pages/TodoList/TodoList'));
const Login = lazy(() => import('../pages/Login'));
const SingUp = lazy(() => import('../pages/SingUp'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={routes.home} element={<SharedLoyout />}>
        <Route index element={<Home />} />
        <Route path={routes.contacts} element={<Contacts />} />
        <Route path="todo-list" element={<TodoList />} />
        <Route path={routes.singUp} element={<SingUp />} />
        <Route path={routes.login} element={<Login />} />

        <PrivateRoute path="todo-list"></PrivateRoute>
      </Route>
    </Routes>
  );
}

export default App;
