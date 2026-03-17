import { Navigation } from '../Navigation';
import style from './style.module.css';

export const Header = () => {

  return (
    <>
    <header>
      <h1 className={style.title}><span className={style.bullet}>&bull;</span> TaskBoard</h1>
      <Navigation />
    </header>
    </>
  );
}