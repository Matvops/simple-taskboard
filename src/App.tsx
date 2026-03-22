
import './styles/theme.css';
import './styles/global.css';
import { Header } from './components/Header';
import { Steps } from './components/Steps';
import { Footer } from './components/Footer';

export const App = () => {

  return (
    <>
      <div style={{minHeight: '99vh', marginTop: '1px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Header />

        <Steps />

        <Footer />
      </div>
    </>
  );
}