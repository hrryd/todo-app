import { TODO_ITEM_COMPLETE } from '../actions';
import { TodoItemModel } from '../../models/todo-item.model';
import { combineReducers, AnyAction } from 'redux';

export interface TodoListState {
    todoIds: string[],
    todoListById: { [key: string]: TodoItemModel; },
}

export const initialState: TodoListState = {
    todoIds: ['x'],
    todoListById: {
        'x': {
                id: 'x',
                title: 'Card One',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nunc quis est blandit consequat. Nam nunc erat, dignissim in metus et, facilisis accumsan dolor. Nunc sodales diam vitae dui lacinia, vel ultricies quam lobortis.',
                complete: false,
        },
    }
};

export const todoListReducer = (state: TodoListState = initialState, action: AnyAction): TodoListState => {
    switch (action.type) {
        case TODO_ITEM_COMPLETE:
            let newState = { ...state };
            newState.todoListById[action.payload.id].complete = true;
            return newState;
        default:
            return state;
    }
};

export default todoListReducer;