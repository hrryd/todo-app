import { TodoItemModel } from '../../models/todo-item.model';
import { VisibilityFilter } from './reducers';

export const TODO_ITEM_CREATE = 'TODO_ITEM/CREATED';
export const TODO_ITEM_COMPLETE = 'TODO_ITEM/COMPLETE';
export const TODO_ITEM_DELETE = 'TODO_ITEM/DELETE';
export const TODO_ITEM_MOVE_UP = 'TODO_ITEM/MOVE_UP';
export const TODO_ITEM_MOVE_DOWN = 'TODO_ITEM/MOVE_DOWN';
export const TODO_FILTER_CHANGE_STATE = 'TODO_FILTER/CHANGE_STATE';

export const todoItemComplete = (payload: TodoItemModel) => ({
    type: TODO_ITEM_COMPLETE,
    payload,
});

export const todoItemDelete = (payload: TodoItemModel) => ({
    type: TODO_ITEM_DELETE,
    payload,
});

export const todoItemMoveUp = (payload: TodoItemModel) => ({
    type: TODO_ITEM_MOVE_UP,
    payload,
});

export const todoItemMoveDown = (payload: TodoItemModel) => ({
    type: TODO_ITEM_MOVE_DOWN,
    payload,
});

export const todoFilterChangeState = (payload: VisibilityFilter) => ({
    type: TODO_FILTER_CHANGE_STATE,
    payload,
});
