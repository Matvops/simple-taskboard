import { PlusIcon } from 'lucide-react';
import style from './style.module.css';

export const Steps = () => {


  return (
    <>
      <div className={style.steps}>

        <div className={style.step}>
          <div className={style.headerCard}>
            <div>
              <h2 className={style.title}><span className={`${style.toDo} ${style.bullet}`}>&bull;</span> A Fazer</h2>
              <span className={style.numberOfTasks}>2</span>
            </div>

            <button className={style.buttonHeader}>
              <PlusIcon /> Adicionar
            </button>
          </div>

          <div className={style.contentCard}>
            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.priorityLow}`}>&bull; Baixa</p>
                <span className={style.createDate}>02/02/2022</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.step}>
          <div className={style.headerCard}>
            <div>
              <h2 className={style.title}><span className={`${style.blocked} ${style.bullet}`}>&bull;</span> Bloqueado</h2>
              <span className={style.numberOfTasks}>2</span>
            </div>
            <button className={style.buttonHeader}>
              <PlusIcon /> Adicionar
            </button>
          </div>

          <div className={style.contentCard}>
            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.priorityMedium}`}>&bull; Média</p>
                <span className={style.createDate}>02/02/2022</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.step}>
          <div className={style.headerCard}>
            <div>
              <h2 className={style.title}><span className={`${style.working} ${style.bullet}`}>&bull;</span> Fazendo</h2>
              <span className={style.numberOfTasks}>2</span>
            </div>
            <button className={style.buttonHeader}>
              <PlusIcon /> Adicionar
            </button>
          </div>

          <div className={style.contentCard}>
            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.priorityHigh}`}>&bull; Alta</p>
                <span className={style.createDate}>02/02/2022</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.step}>

          <div className={style.headerCard}>
            <div>
              <h2 className={style.title}><span className={`${style.done} ${style.bullet}`}>&bull;</span> Concluído</h2>
              <span className={style.numberOfTasks}>2</span>
            </div>
            <button className={style.buttonHeader}>
              <PlusIcon /> Adicionar
            </button>
          </div>

          <div className={style.contentCard}>

            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.priorityHigh}`}>&bull; Alta</p>
                <span className={style.createDate}>02/02/2022</span>
              </div>
            </div>

            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.priorityHigh}`}>&bull; Alta</p>
                <span className={style.createDate}>02/02/2022</span>
              </div>
            </div>

            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.priorityHigh}`}>&bull; Alta</p>
                <span className={style.createDate}>02/02/2022</span>
              </div>
            </div>

            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principaaaaaaaaaaal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.priorityHigh}`}>&bull; Alta</p>
                <span className={style.createDate}>02/02/2022</span>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </>
  );
}