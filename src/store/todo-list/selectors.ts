import { createSelector } from 'reselect';
import { TodoListState } from './reducers';

const getVisibilityFilter = (state: TodoListState) => 'SHOW_ACTIVE';

const getTodosSorted = (state: TodoListState) => state.todoIds.map(id => state.todosById[id]);

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodosSorted],
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter((t) => t.complete);
            case 'SHOW_ACTIVE':
                return todos.filter((t) => !t.complete);
            default:
                return [];
        }
    }
);
