import Container from '@mui/material/Container';
import TodoAppBar from './global/components/AppBar';
import Todo from './pages/Todo';

const App = () => (
  <div>
    <TodoAppBar />

    <Container maxWidth="xl">
      <Todo />
    </Container>
  </div>
);

export default App;
