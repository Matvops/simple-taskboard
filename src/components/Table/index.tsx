import { useContext } from 'react';
import style from './style.module.css';
import { TaskContext } from '../../contexts/TasksContext';
import { Utils } from '../../utils/Utils';

export const Table = () => {

  const { state } = useContext(TaskContext);

  const prioritys = {
    lowPriority: 'Baixa',
    mediumPriority: 'Média',
    highPriority: 'Alta',
  }


  const stages = {
    toDo: 'A Fazer',
    blocked: 'Bloqueado',
    working: 'Fazendo',
    done: 'Concluído',
  }

  const returnTasks = () => {

    return state.tasks?.map((task, key) => {

      return (
        <>
          <tr className={style.tableRow} key={key}>
            <td className={`${style.tableData} ${style.description}`}>{task.name}</td>
            <td className={`${style.tableData} ${style.date}`}>{Utils.numberToDate(task.createdAt)}</td>
            <td className={style.tableData}>
              <span className={style[task.stage]}>{stages[task.stage]}</span>
            </td>
            <td className={`${style.tableData}`}>
              <span className={style[task.priority]}>&bull; {prioritys[task.priority]}</span>
            </td>
          </tr>
        </>
      )
    });
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <h2 className={style.title}>Todas as tarefas</h2>
          <span className={style.numberTasks}>{state.tasks?.length} tarefas</span>
        </div>

        <table className={style.table}>
          <thead className={style.tableHeader}>
            <tr>
              <th className={style.header}>Título</th>
              <th className={style.header}>Data de Criação</th>
              <th className={style.header}>Status</th>
              <th className={style.header}>Prioridade</th>
            </tr>
          </thead>
          <tbody>
            {returnTasks()}
          </tbody>
        </table>
      </div>
    </>
  );
}