import style from './style.module.css';
import { RouterLink } from '../../routers/RouterLink';

export const Navigation = () => {

  return (
    <>
      <nav className={style.nav}>
        <RouterLink path='/' className={style.link}>Quadro</RouterLink>
        <RouterLink path='/lista' className={style.link}>Lista</RouterLink>
      </nav>
    </>
  );
}