import { connect } from 'react-redux';
import { TodoListState } from '../store/todo-list/reducers';
import { TodoItemModel } from '../models/todo-item.model';
import {
    todoItemComplete,
    todoItemDelete,
    todoItemMoveUp,
    todoItemMoveDown,
} from '../store/todo-list/actions';
import TodoList from '../components/TodoList';
import { Dispatch } from 'react';
import { getVisibleTodos } from '../store/todo-list/selectors';

const mapStateToProps = (state: TodoListState) => {
    return {
        todoList: getVisibleTodos(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        handlers: {
            onTodoComplete: (todoItem: TodoItemModel) =>
                dispatch(todoItemComplete(todoItem)),
            onTodoDelete: (todoItem: TodoItemModel) =>
                dispatch(todoItemDelete(todoItem)),
            onTodoMoveUp: (todoItem: TodoItemModel) =>
                dispatch(todoItemMoveUp(todoItem)),
            onTodoMoveDown: (todoItem: TodoItemModel) =>
                dispatch(todoItemMoveDown(todoItem)),
        },
    };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
