/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload: todo }) => {
      state.value.push(todo);
    },
    editTodo: (state, { payload: { id, data } }) => {
      const index = state.value.findIndex((todo) => (todo.id === id));

      const newTodo = {
        ...data,
        id,
      };

      state.value[index] = newTodo;
    },
    setTodoList: (state, { payload: list }) => {
      state.value = list;
    },
    deleteTodo: (state, { payload: id }) => {
      state.value = state.value.filter((todo) => (todo.id !== id));
    },
  },
});

export const {
  addTodo, editTodo, setTodoList, deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
