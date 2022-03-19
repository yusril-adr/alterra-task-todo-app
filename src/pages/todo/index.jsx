import Todo from '../../data/Todo';
import ToDoList from './components/TodoList';

const Todos = () => {
  const list = Todo.getList();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-6 mb-8">To Do List</h1>

      <ToDoList list={list} />
    </div>
  );
};

export default Todos;
