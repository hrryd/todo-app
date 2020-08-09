import { connect } from 'react-redux';
import { TodoListState } from '../store/reducers/reducers';
import { TodoItemModel } from '../models/todo-item.model';
import { todoItemComplete } from '../store/actions';
import TodoList from '../components/TodoList';
import { Dispatch } from 'react';

const mapStateToProps = (state: TodoListState) => {
    return {
        todoList: Object.values(state.todoListById)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onTodoClick: (todoItem: TodoItemModel) => {
            dispatch(todoItemComplete(todoItem))
        }
    }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;