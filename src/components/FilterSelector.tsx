import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { VisibilityFilter } from '../store/todo-list/reducers';
import { useDispatch } from 'react-redux';
import { todoFilterChangeState } from '../store/todo-list/actions';

function FilterSelector() {
    const dispatch = useDispatch();

    return (
        <Select
            defaultValue={VisibilityFilter.SHOW_ALL}
            onChange={(e) =>
                dispatch(
                    todoFilterChangeState(e.target.value as VisibilityFilter)
                )
            }
        >
            {filterOptions.map((option, i) => (
                <MenuItem key={i} value={option.filter}>
                    {option.name}
                </MenuItem>
            ))}
        </Select>
    );
}

const filterOptions = [
    { name: 'All', filter: VisibilityFilter.SHOW_ALL },
    { name: 'Todo', filter: VisibilityFilter.SHOW_ACTIVE },
    { name: 'Done', filter: VisibilityFilter.SHOW_COMPLETED },
];

export default FilterSelector;
