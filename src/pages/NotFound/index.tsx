import { RouterLink } from '../../routers/RouterLink';
import { MainTemplate } from '../../templates/MainTemplate';
import style from './style.module.css';


export const NotFound = () => {

  return (
    <MainTemplate>
      <div className={style.card}>

        <div className={style.containerTitle}>
          <h1 className={style.title}>404</h1>
        </div>

        <div className={style.containerContent}>
          <h2 className={style.subTitle}>Página não encontrada</h2>
          <p className={style.description}>Parece que essa página não existe ou foi movida. Verifique o endereço ou volte para o início.</p>
        </div>

        <div className={style.containerButtons}>
          <RouterLink path='/'>
            <button className={`${style.button} ${style.backButton}`}>&larr; Voltar ao início</button>
          </RouterLink>
        </div>

        <div className={style.footer}>
          <span className={style.footerText}>Código de erro: 404 — Not Found</span>
        </div>
      </div>
    </MainTemplate>
  );
}