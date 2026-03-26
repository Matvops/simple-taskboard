
import './styles/theme.css';
import './styles/global.css';
import { Board } from './pages/Board';
import { Route } from 'react-router';
import { List } from './pages/List';
import { MainRouter } from './routers/MainRouter';
import { Author } from './pages/Author';

export const App = () => {

  return (
    <>
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
          element={<div>Página não existe</div>}
        />
      </MainRouter>
    </>
  );
}