import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { VisibilityFilter } from '../store/todo-list/reducers';

function FilterSelector() {
    return (
        <Select defaultValue={VisibilityFilter.SHOW_ALL}>
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
