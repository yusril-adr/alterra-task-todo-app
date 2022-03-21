import { nanoid } from 'nanoid';

import TodoService from './TodoService';

import TodosValidator from '../../../validator/todos';

const Todo = {
  addTodo(title) {
    const todo = {
      id: nanoid(),
      title,
      completed: false,
    };

    TodosValidator.validateTodoPayload(todo);

    TodoService.addTodo(todo);
  },

  getTodoList() {
    return TodoService.getTodoList();
  },

  getTodo(id) {
    return TodoService.getTodo(id);
  },

  editTodo(id, payload) {
    TodoService.editTodo(id, payload);
  },

  deleteTodo(id) {
    TodoService.deleteTodo(id);
  },
};

export default Todo;
