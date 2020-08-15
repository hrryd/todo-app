import { createSelector } from 'reselect';
import { TodoListState } from './reducers';

const getVisibilityFilter = (state: TodoListState) => 'SHOW_ACTIVE';

const getTodos = (state: TodoListState) => Object.values(state.todosById);

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
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
