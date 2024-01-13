import { Route, Routes } from "react-router-dom";
import PhoneBook from "../pages/PhoneBook/PhoneBook";
import TodoList from "../pages/TodoList/TodoList";
import SharedLoyout from "../pages/SharedLoyout";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLoyout />}>
        <Route index element={<PhoneBook />} />
        <Route path="todo-list" element={<TodoList />} />
        <Route path="login" element={<Login />} />
        <Route path="sing-up" element={<SingUp />} />
      </Route>
    </Routes>
  );
}

export default App;
