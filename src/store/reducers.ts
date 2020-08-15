import { combineReducers } from 'redux';
import todoListReducer from './todo-list/reducers';

const reducerMap = {
    todos: todoListReducer,
};

export default combineReducers(reducerMap);
