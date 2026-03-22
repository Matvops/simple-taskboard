
import './styles/theme.css';
import './styles/global.css';
import { Header } from './components/Header';
import { Steps } from './components/Steps';

export const App = () => {

  return (
    <>
      <div style={{minHeight: '99vh', marginTop: '1px'}}>
        <Header />

        <Steps />
      </div>
    </>
  );
}