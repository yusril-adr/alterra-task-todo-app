import { nanoid } from 'nanoid';

// Service
import TodoService from '../services/localStorage/TodoService';

// Validator
import TodosValidator from '../../validator/todos';

const Todo = {
  addTodo(title) {
    const todo = {
      id: nanoid(),
      title,
      completed: false,
    };

    TodosValidator.validateTodoPayload(todo);

    TodoService.addTodo(todo);

    return todo;
  },

  getTodoList() {
    return TodoService.getTodoList();
  },

  getTodo(id) {
    return TodoService.getTodo(id);
  },

  editTodo(id, payload) {
    const todo = { id, ...payload };
    TodosValidator.validateTodoPayload(todo);
    return TodoService.editTodo(id, payload);
  },

  deleteTodo(id) {
    TodoService.deleteTodo(id);
  },
};

export default Todo;
