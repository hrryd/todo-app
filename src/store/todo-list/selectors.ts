import { createSelector } from 'reselect';
import { TodoListState, VisibilityFilter } from './reducers';

const getVisibilityFilter = (state: TodoListState) => state.visibiltyFilter;

const getTodosSorted = (state: TodoListState) =>
    state.todoIds
        .map((id) => state.todosById[id])
        .concat(state.todoCompleteIds.map((id) => state.todosById[id]));

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodosSorted],
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case VisibilityFilter.SHOW_ALL:
                return todos;
            case VisibilityFilter.SHOW_COMPLETED:
                return todos.filter((t) => t.complete);
            case VisibilityFilter.SHOW_ACTIVE:
                return todos.filter((t) => !t.complete);
            default:
                return [];
        }
    }
);
