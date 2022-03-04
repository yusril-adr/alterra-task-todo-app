import { nanoid } from 'nanoid';
import NotFoundError from '../exceptions/NotFoundError';
import TodosValidator from '../validator/todos';

let list = [
  // {
  //   id: nanoid(),
  //   title: 'Membuat Komponen',
  //   completed: true,
  // },
  // {
  //   id: nanoid(),
  //   title: 'Unit Testing',
  //   completed: false,
  // },
  // {
  //   id: nanoid(),
  //   title: 'Setup Development Environment',
  //   completed: true,
  // },
  // {
  //   id: nanoid(),
  //   title: 'Deploy ke server',
  //   completed: false,
  // },
];

const Todo = {
  addTodo(title) {
    const todo = {
      id: nanoid(),
      title,
      completed: false,
    };

    TodosValidator.validateTodoPayload(todo);

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
  },

  deleteTodo(id) {
    list = list.filter((todo) => (todo.id !== id));
  },
};

export default Todo;
