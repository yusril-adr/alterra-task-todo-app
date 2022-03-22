/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Data Handler
import Todo from '../../../models/Todo';

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload: title }) => {
      Todo.addTodo(title);

      state.value = Todo.getTodoList();
    },
    editTodo: (state, { payload: { id, title, completed } }) => {
      Todo.editTodo(id, { title, completed });

      state.value = Todo.getTodoList();
    },
    setTodoList: (state) => {
      state.value = Todo.getTodoList();
    },
    deleteTodo: (state, { payload: id }) => {
      Todo.deleteTodo(id);

      state.value = Todo.getTodoList();
    },
  },
});

export const {
  addTodo, editTodo, setTodoList, deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
