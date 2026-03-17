import style from './style.module.css';

export const Navigation = () => {

  return (
    <>
      <nav className={style.nav}>
        <a href="/" className={style.link}>Quadro</a>
        <a href="/" className={style.link}>Lista</a>
      </nav>
    </>
  );
}