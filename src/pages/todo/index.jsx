import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Global Components
import Alert from '../../global/components/Alert';

// Page Components
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

// Configuration
import CONFIG from '../../global/CONFIG';

// Actions
import { setTodoList } from '../../data/services/redux/slices/TodoSlice';

// Exceptions
import ClientError from '../../exceptions/ClientError';

const Todos = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const list = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const updateList = () => {
    dispatch(setTodoList());
  };

  useEffect(() => {
    try {
      updateList();
    } catch (error) {
      if (error instanceof ClientError) {
        setErrorMessage(error.message);
        return;
      }

      // eslint-disable-next-line no-console
      console.log(error);
      setErrorMessage(CONFIG.DEFAULT_ERROR_MESSAGE);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-6 mb-8">To Do List</h1>

      <TodoList
        list={list}
        updateList={updateList}
      />

      <AddTodo />

      <Alert
        title={CONFIG.DEFAULT_ERROR_TITLE}
        message={errorMessage}
        setMessage={setErrorMessage}
      />
    </div>
  );
};

export default Todos;
