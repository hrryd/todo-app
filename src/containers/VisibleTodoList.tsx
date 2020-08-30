import { connect } from 'react-redux';
import { TodoListState } from '../store/todo-list/reducers';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../store/todo-list/selectors';

const mapStateToProps = (state: TodoListState) => {
    return {
        todoList: getVisibleTodos(state),
    };
};

const VisibleTodoList = connect(mapStateToProps)(TodoList);

export default VisibleTodoList;
