
import './styles/theme.css';
import './styles/global.css';
import { Board } from './pages/Board';
import { Route } from 'react-router';
import { List } from './pages/List';
import { MainRouter } from './routers/MainRouter';
import { Author } from './pages/Author';
import { NotFound } from './pages/NotFound';
import { TaskContextProvider } from './contexts/TasksContext/TaskContextProvider';

export const App = () => {

  return (
    <TaskContextProvider>
      
      <MainRouter>
        <Route
          path='/'
          element={<Board />}
        />

        <Route
          path='/lista'
          element={<List />}
        />

        <Route
          path='/autor'
          element={<Author />}
        />

        <Route
          path='*'
          element={<NotFound />}
        />
      </MainRouter>
    </TaskContextProvider>
  );
}