import { TODO_ITEM_COMPLETE, TODO_ITEM_DELETE, TODO_ITEM_MOVE_UP, TODO_ITEM_MOVE_DOWN } from './actions';
import { TodoItemModel } from '../../models/todo-item.model';
import { AnyAction } from 'redux';

export enum VisibilityFilter {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
}

export interface TodoListState {
    todoIds: string[];
    todoCompleteIds: string[];
    visibiltyFilter: VisibilityFilter;
    todosById: { [key: string]: TodoItemModel };
}

export const initialState: TodoListState = {
    todoIds: ['a', 'b', 'c'],
    todoCompleteIds: [],
    visibiltyFilter: VisibilityFilter.SHOW_ALL,
    todosById: {
        a: {
            id: 'a',
            title: 'Card One',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nunc quis est blandit consequat. Nam nunc erat, dignissim in metus et, facilisis accumsan dolor. Nunc sodales diam vitae dui lacinia, vel ultricies quam lobortis.',
            complete: false,
        },
        b: {
            id: 'b',
            title: 'Card Two',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nunc quis est blandit consequat. Nam nunc erat, dignissim in metus et, facilisis accumsan dolor. Nunc sodales diam vitae dui lacinia, vel ultricies quam lobortis.',
            complete: false,
        },
        c: {
            id: 'c',
            title: 'Card Three',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nunc quis est blandit consequat. Nam nunc erat, dignissim in metus et, facilisis accumsan dolor. Nunc sodales diam vitae dui lacinia, vel ultricies quam lobortis.',
            complete: false,
        },
    },
};

export default (
    state: TodoListState = initialState,
    action: AnyAction
): TodoListState => {
    let newState = { ...state };
    switch (action.type) {
        case TODO_ITEM_COMPLETE:
            newState.todosById[action.payload.id].complete = true;
            deleteElem(newState.todoIds, action.payload.id);
            newState.todoCompleteIds.push(action.payload.id);
            break;
        case TODO_ITEM_DELETE:
            delete newState.todosById[action.payload.id];
            if (action.payload.complete) {
                deleteElem(newState.todoCompleteIds, action.payload.id);
            } else {
                deleteElem(newState.todoIds, action.payload.id);
            }
            break;
        case TODO_ITEM_MOVE_UP:
            moveIndex(newState.todoIds, newState.todoIds.indexOf(action.payload.id), 1);
            break;
        case TODO_ITEM_MOVE_DOWN:
            moveIndex(newState.todoIds, newState.todoIds.indexOf(action.payload.id), -1);
            break;
    }
    return newState;
};

const moveIndex = (arr: Array<any>, index: number, direction: number) => {
    let newIndex = index - direction;
    if (isAtEnd(arr, newIndex)) {
        return arr;
    }

    return swap(arr, newIndex, index);
}

const isAtEnd = (arr: Array<any>, index: number) => {
    return index < 0 || index >= arr.length;
}

const swap = (arr: Array<any>, a: number, b: number) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

const deleteIndex = (arr: Array<any>, index: number) => {
    return arr.splice(index, 1);
}

const deleteElem = <T>(arr: Array<T>, elem: T) => {
    return deleteIndex(arr, arr.indexOf(elem));
}