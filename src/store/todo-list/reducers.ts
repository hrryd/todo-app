import {
    TODO_ITEM_COMPLETE,
    TODO_ITEM_DELETE,
    TODO_ITEM_MOVE_UP,
    TODO_ITEM_MOVE_DOWN,
} from './actions';
import { TodoItemModel } from '../../models/todo-item.model';
import { AnyAction } from 'redux';

export enum VisibilityFilter {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
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
            completeItem(newState, action.payload);
            break;
        case TODO_ITEM_DELETE:
            deleteItem(newState, action.payload);
            break;
        case TODO_ITEM_MOVE_UP:
            moveItem(newState, action.payload, 1);
            break;
        case TODO_ITEM_MOVE_DOWN:
            moveItem(newState, action.payload, -1);
            break;
    }
    return newState;
};

const completeItem = (state: TodoListState, todoItem: TodoItemModel) => {
    state.todosById[todoItem.id].complete = true;
    deleteElem(state.todoIds, todoItem.id);
    state.todoCompleteIds.push(todoItem.id);

}

const deleteItem = (state: TodoListState, todoItem: TodoItemModel) => {
    let idList = getIdList(state, todoItem);
    delete state.todosById[todoItem.id];
    deleteElem(idList, todoItem.id);
}

const moveItem = (state: TodoListState, todoItem: TodoItemModel, direction: number) => {
    let idList = getIdList(state, todoItem);
    moveIndex(
        idList,
        idList.indexOf(todoItem.id),
        direction
    );
}

const getIdList = (state: TodoListState, todoItem: TodoItemModel) => {
    return todoItem.complete ? state.todoCompleteIds : state.todoIds;
}

const moveIndex = (arr: Array<any>, index: number, direction: number) => {
    let newIndex = index - direction;
    if (isAtEnd(arr, newIndex)) {
        return arr;
    }

    return swap(arr, newIndex, index);
};

const isAtEnd = (arr: Array<any>, index: number) => {
    return index < 0 || index >= arr.length;
};

const swap = (arr: Array<any>, a: number, b: number) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
};

const deleteIndex = (arr: Array<any>, index: number) => {
    return arr.splice(index, 1);
};

const deleteElem = <T>(arr: Array<T>, elem: T) => {
    return deleteIndex(arr, arr.indexOf(elem));
};
