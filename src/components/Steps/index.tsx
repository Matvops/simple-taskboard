import { PlusIcon } from 'lucide-react';
import style from './style.module.css';
import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../contexts/TasksContext';
import { ModalCreateTask } from '../ModalCreateTask';
import type { TaskType } from '../../types/TaskType';

export const Steps = () => {

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<TaskType['stage']>('toDo');
  const { state } = useContext(TaskContext);

  const prioritys = {
    lowPriority: 'Baixa',
    mediumPriority: 'Média',
    highPriority: 'Alta',
  }

  function openModal(type: TaskType['stage']) {
    setType(type);
    setVisible(true)
  }

  const returnTasks = (type: TaskType['stage']) => {

    return state.tasks?.map((task, key) => {

      if(task.stage === type) {
        const date = new Date(task.createdAt);

        const formattedDate = date.getDate() + '/' + String(date.getMonth()).padStart(2, '0') + '/' + date.getFullYear();


        return (
          <>
            <div className={style.content} key={key} draggable>
              <span className={style.description}>{task.name}</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style[task.priority]}`}>&bull; {prioritys[task.priority]}</p>
                <span className={style.createDate}>{formattedDate}</span>
              </div>
            </div>
          </>
        )
      };

    });
  }

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <div className={style.steps}>

        <div className={style.step}>
          <div className={style.headerCard}>
            <div>
              <h2 className={style.title}><span className={`${style.toDo} ${style.bullet}`}>&bull;</span> A Fazer</h2>
              <span className={style.numberOfTasks}>2</span>
            </div>

            <button className={style.buttonHeader} onClick={() => openModal('toDo')}>
              <PlusIcon /> Adicionar
            </button>
          </div>

          <div className={style.contentCard}>

            {returnTasks('toDo')}
            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.lowPriority}`}>&bull; Baixa</p>
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
            <button className={style.buttonHeader} onClick={() => openModal('blocked')}>
              <PlusIcon /> Adicionar
            </button>
          </div>

          <div className={style.contentCard}>
            {returnTasks('blocked')}
            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.mediumPriority}`}>&bull; Média</p>
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
            <button className={style.buttonHeader} onClick={() => openModal('working')}>
              <PlusIcon /> Adicionar
            </button>
          </div>

          <div className={style.contentCard}>
            {returnTasks('working')}
          </div>
        </div>

        <div className={style.step}>

          <div className={style.headerCard}>
            <div>
              <h2 className={style.title}><span className={`${style.done} ${style.bullet}`}>&bull;</span> Concluído</h2>
              <span className={style.numberOfTasks}>2</span>
            </div>
            <button className={style.buttonHeader} onClick={() => openModal('done')}>
              <PlusIcon /> Adicionar
            </button>
          </div>

          <div className={style.contentCard}>

            {returnTasks('done')}

            <div className={style.content} draggable>
              <span className={style.description}>Criar wireframes da interface principal</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style.highPriority}`}>&bull; Alta</p>
                <span className={style.createDate}>02/02/2022</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ModalCreateTask
        visible={visible}
        setVisible={setVisible}
        type={type}
      />
    </>
  );
}