import TodoItem from './TodoItem';

const TodoList = ({ list = [], updateList }) => (
  <>
    {list.length < 1 && (
      <div className="flex justify-center items-center">
        <h2 className="text-2xl text-gray-600">List is Empty</h2>
      </div>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 xl:gap-8">

      {list.map((item) => (
        <TodoItem key={item.id} item={item} updateList={updateList} />
      ))}
    </div>
  </>
);

export default TodoList;
