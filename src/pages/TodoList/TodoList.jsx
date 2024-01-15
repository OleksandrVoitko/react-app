import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Bar from '../../components/Bar';
import Loyout from '../../components/Loyout/Loyout';
import StatusFilter from '../../components/TodoList/StatusFilter';
import TaskList from '../../components/TodoList/TaskList';

import TodoCounter from '../../components/TodoList/TodoCounter';
import TodoForm from '../../components/TodoList/TodoForm';
import contactsOperations from '../../redux/contacts/contactsOperations';

const TodoList = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Loyout>
      <Bar barName={'Tasks'} filterName={'Filter by status'}>
        <TodoCounter />
        <StatusFilter />
      </Bar>
      <TodoForm />
      <TaskList />
    </Loyout>
  );
};

export default TodoList;
