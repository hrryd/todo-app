import React from 'react';
import { TodoItemModel } from '../models/todo-item.model';
import TodoItem from './TodoItem';
import { Box } from '@material-ui/core';

type TodoListProps = {
    todoList: TodoItemModel[];
};

function TodoList(props: TodoListProps) {
    return (
        <Box>
            {props.todoList.map((todoItem, i) => (
                <Box key={i} mt={2} mb={2}>
                    <TodoItem todoItem={todoItem} {...props} />
                </Box>
            ))}
        </Box>
    );
}

export default TodoList;
