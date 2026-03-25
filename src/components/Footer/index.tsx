import { RouterLink } from '../../routers/RouterLink';
import style from './style.module.css';

export const Footer = () => {

  return (
    <>
      <footer className={style.footer}>
        <p className={style.text}>Criado por
          <RouterLink path='#'>Matvops</RouterLink>
        </p>
      </footer>
    </>
  );
}