import { PlusIcon } from 'lucide-react';
import style from './style.module.css';
import { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/TasksContext';
import { ModalCreateTask } from '../ModalCreateTask';
import { Utils } from '../../utils/Utils';
import type { TasksType } from '../../types/TasksTypes';

export const Steps = () => {

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<keyof TasksType['tasks']>('toDo');
  const { state } = useContext(TaskContext);

  const prioritys = {
    lowPriority: 'Baixa',
    mediumPriority: 'Média',
    highPriority: 'Alta',
  }

  function openModal(type: keyof TasksType['tasks']) {
    setType(type);
    setVisible(true)
  }

  const returnTasks = (type: keyof TasksType['tasks']) => {

    return state.tasks[type]?.map((task, key) => {

      if(task.stage === type) {

        return (
          <>
            <div className={style.content} key={key} draggable>
              <span className={style.description}>{task.name}</span>
              <div className={style.contentFooter}>
                <p className={`${style.priority} ${style[task.priority]}`}>&bull; {prioritys[task.priority]}</p>
                <span className={style.createDate}>{Utils.numberToDate(task.createdAt)}</span>
              </div>
            </div>
          </>
        )
      };

    });
  }

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