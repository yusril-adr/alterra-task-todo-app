import { combineReducers } from 'redux';

// Reducers from Slice
import todoReducer from './slices/TodoSlice';

export default combineReducers({
  todo: todoReducer,
});
