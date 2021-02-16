import './App.scss';
import './styles/reset.scss';

import { AppBar, Box, Button, Container, Toolbar, Typography } from '@material-ui/core';
import { Books } from './components/Books/Books';

function App() {
  return (
    <>
      <AppBar position="sticky">
        <Container fixed>
          <Typography variant="h1">
            Books
          </Typography>
        </Container>
      </AppBar>

      <Container fixed>
        <Books />
      </Container>
    </>
  );
}

export default App;
