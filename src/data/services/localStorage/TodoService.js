import CONFIG from '../../../global/CONFIG';
import NotFoundError from '../../../exceptions/NotFoundError';

const TodoService = {
  addTodo(todo) {
    const list = this.getTodoList();
    list.push(todo);
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(list));
  },

  getTodoList() {
    const list = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY)) || [];
    return list;
  },

  getTodo(id) {
    const list = this.getTodoList();
    const result = list.find((todo) => (todo.id === id));
    if (!result) throw new NotFoundError('Item not Found.');
    return result;
  },

  editTodo(id, payload) {
    const list = this.getTodoList();
    const index = list.findIndex((todo) => (todo.id === id));
    if (index < 0) throw new NotFoundError('Item not Found.');
    const newTodo = {
      ...payload,
      id,
    };
    list[index] = newTodo;
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(list));
  },

  deleteTodo(id) {
    const list = this.getTodoList();
    const filteredList = list.filter((todo) => (todo.id !== id));
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(filteredList));
  },
};

export default TodoService;
