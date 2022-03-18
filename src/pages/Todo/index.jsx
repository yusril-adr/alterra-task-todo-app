import { useState, useEffect } from 'react';
import Alert from '../../global/components/Alert';
import TodoList from './components/ToDoList';
import Todo from '../../data/Todo';
import AddTodo from './components/AddTodo';
import ClientError from '../../exceptions/ClientError';
import CONFIG from '../../global/CONFIG';

const Todos = () => {
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const updateList = () => {
    setList([...Todo.getTodoList()]);
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

      <TodoList list={list} updateList={updateList} />

      <AddTodo
        updateList={updateList}
      />

      <Alert
        title={CONFIG.DEFAULT_ERROR_TITLE}
        message={errorMessage}
        setMessage={setErrorMessage}
      />
    </div>
  );
};

export default Todos;
