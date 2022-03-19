import ToDoItem from './TodoItem';

const ToDoList = ({ list = [] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 xl:gap-8">
    {list.map((item) => (
      <ToDoItem key={item.id} item={item} />
    ))}
  </div>
);

export default ToDoList;
