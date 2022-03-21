import NotFoundError from '../../../exceptions/NotFoundError';

let list = [];

const TodoService = {
  addTodo(todo) {
    list.push(todo);
  },

  getTodoList() {
    return list;
  },

  getTodo(id) {
    const result = list.find((todo) => (todo.id === id));
    if (!result) throw new NotFoundError('Item not Found.');
    return result;
  },

  editTodo(id, payload) {
    const index = list.findIndex((todo) => (todo.id === id));

    if (index < 0) throw new NotFoundError('Item not Found.');

    const newTodo = {
      ...payload,
      id,
    };
    list[index] = newTodo;

    return newTodo;
  },

  deleteTodo(id) {
    list = list.filter((todo) => (todo.id !== id));
  },
};

export default TodoService;
