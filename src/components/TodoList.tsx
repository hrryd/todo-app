import React from 'react';
import { TodoItemModel } from '../models/todo-item.model';
import TodoItem from './TodoItem';
import { Box } from '@material-ui/core';

type TodoListProps = {
    todoList: TodoItemModel[];
    onTodoClick: (todoItem: TodoItemModel) => void;
};

function TodoList(props: TodoListProps) {
    return (
        <Box>
            {props.todoList.map((todoItem, i) => (
                <Box mt={2} mb={2}>
                    <TodoItem
                        key={i}
                        todoItem={todoItem}
                        onTodoClick={props.onTodoClick}
                    />
                </Box>
            ))}
        </Box>
    );
}

export default TodoList;
