import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { Check, ArrowUpward, ArrowDownward, Delete } from '@material-ui/icons';
import { TodoItemModel } from '../models/todo-item.model';
import { TodoHandlers } from './TodoList';

type TodoItemProps = {
    todoItem: TodoItemModel;
    handlers: TodoHandlers;
};

function TodoItem(props: TodoItemProps) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.todoItem.title}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        {props.todoItem.description}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton
                        onClick={() =>
                            props.handlers.onTodoComplete(props.todoItem)
                        }
                        disabled={props.todoItem.complete}
                    >
                        <Check />
                    </IconButton>
                    <IconButton
                        onClick={() =>
                            props.handlers.onTodoMoveUp(props.todoItem)
                        }
                    >
                        <ArrowUpward />
                    </IconButton>
                    <IconButton
                        onClick={() =>
                            props.handlers.onTodoMoveDown(props.todoItem)
                        }
                    >
                        <ArrowDownward />
                    </IconButton>
                    <IconButton
                        onClick={() =>
                            props.handlers.onTodoDelete(props.todoItem)
                        }
                    >
                        <Delete />
                    </IconButton>
                </div>
            </div>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export default TodoItem;
