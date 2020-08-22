import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import VisibleTodoList from './containers/VisibleTodoList';
import FilterSelector from './components/FilterSelector';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <FilterSelector />
                <VisibleTodoList />
            </Container>
        </ThemeProvider>
    );
}

export default App;
