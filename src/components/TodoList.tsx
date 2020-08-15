import React from 'react';
import { TodoItemModel } from '../models/todo-item.model';
import TodoItem from './TodoItem';
import { Box } from '@material-ui/core';

export type TodoHandlers = {
    onTodoComplete: (todoItem: TodoItemModel) => void;
    onTodoDelete: (todoItem: TodoItemModel) => void;
    onTodoMoveUp: (todoItem: TodoItemModel) => void;
    onTodoMoveDown: (todoItem: TodoItemModel) => void;
};

type TodoListProps = {
    todoList: TodoItemModel[];
    handlers: TodoHandlers;
};

function TodoList(props: TodoListProps) {
    return (
        <Box>
            {props.todoList.map((todoItem, i) => (
                <Box key={i} mt={2} mb={2}>
                    <TodoItem todoItem={todoItem} handlers={props.handlers} />
                </Box>
            ))}
        </Box>
    );
}

export default TodoList;
