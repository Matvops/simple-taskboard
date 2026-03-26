import { MainTemplate } from '../../templates/MainTemplate';
import style from './style.module.css';

export const Author = () => {

  return (
    <>
      <MainTemplate>
        <section className={style.section}>
          <div className={style.header}>
            <div className={style.image}>MV</div>
            <h2 className={style.headerTitle}>Matvops</h2>
            <p className={style.authorTitle}>Desenvolvedor</p>
          </div>

          <div className={style.contacts}>
            <a target='_blank' href="https://github.com/Matvops?tab=repositories">
              <div className={`${style.github} ${style.card}`}>

                <div className={style.headerCard}>
                  <div className={style.githubImage}>
                    <img className={style.imageCard} src="/github.svg" alt="image github" />
                  </div>

                  <div className={style.content}>
                    <h3 className={style.contentTitle}>GitHub</h3>
                    <p className={style.contentSubtitle}>github.com/Matvops</p>
                  </div>
                </div>

                <div className={style.arrow}>
                  &#x2192;
                </div>
              </div>
            </a>

            <a target='_blank' href="https://www.linkedin.com/in/matheus-cadenassi-799125321/">
              <div className={`${style.linkedin} ${style.card}`}>
              
                <div className={style.headerCard}>
                  <div className={style.linkedinImage}>
                    <img className={style.imageCard} src="/linkedin.svg" alt="image github" />
                  </div>

                  <div className={style.content}>
                    <h3 className={style.contentTitle}>Linkedin</h3>
                    <p className={style.contentSubtitle}>Matheus Cadenassi</p>
                  </div>
                </div>

                <div className={style.arrow}>
                  &#x2192;
                </div>
              </div>
            </a>
          </div>
        </section>
      </MainTemplate>
    </>
  );
}