/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload: todo }) => {
      state.push(todo);
    },
    editTodo: (state, { payload: { id, data } }) => {
      const index = state.findIndex((todo) => (todo.id === id));

      const newTodo = {
        ...data,
        id,
      };

      state[index] = newTodo;
    },
    setTodoList: (state, { payload: list }) => {
      state = list;
    },
    deleteTodo: (state, { payload: id }) => {
      state = state.filter((todo) => (todo.id !== id));
    },
  },
});

export const {
  addTodo, editTodo, setTodoList, deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
