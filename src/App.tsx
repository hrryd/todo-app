import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core'
import VisibleTodoList from './containers/VisibleTodoList';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth="sm">
            <VisibleTodoList />     
        </Container>
    </ThemeProvider>
  );
}

export default App;
