import { useContext, useState } from 'react';
import style from './style.module.css';
import type { TaskType } from '../../types/TaskType';
import { TaskContext } from '../../contexts/TasksContext';
import type { TasksType } from '../../types/TasksTypes';


type ModalCreateTask = {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  type: keyof TasksType['tasks']
};

type OptionsType = {
  value: TaskType['priority'],
  label: string
};

export const ModalCreateTask = ({ visible, setVisible, type }: ModalCreateTask) => {

  const [title, setTitle] = useState<string>('')
  const [priority, setPriority] = useState<TaskType['priority']>('lowPriority');

  const { setState } = useContext(TaskContext);

  const options: OptionsType[] = [
    {value: 'lowPriority', label: 'Baixa'},
    {value: 'mediumPriority', label: 'Média'},
    {value: 'highPriority', label: 'Alta'}
  ];

  const returnOptions = () => {

    return options.map(option => {
      return (
        <>
          <option value={option.value} onClick={() => setPriority(option.value)}>{option.label}</option>
        </>
      );
    });
  }

  function handleCreateTask() {

    const task: TaskType = {
      id: state.tasks[type].length,
      name: title,
      priority: priority,
      stage: type,
      createdAt: Date.now()
    };

    setState(prevState => {
      return {
        tasks: {
          ...prevState.tasks,
          [type]: [...prevState.tasks[type], task]
        },
        length: prevState.length + 1
      }
    });

    setTitle('');
    setPriority('lowPriority');
    setVisible(false);
  }

  return (
    <>
      {visible && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <h1 className={style.title}>Nova tarefa</h1>

            <div>
              <label className={style.label}>Título
                <input 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  type="text" 
                  className={style.input} 
                  placeholder='Digite...' 
                />
              </label>
            </div>

            <div className={style.selectContainer}>
              <label className={style.label}>Prioridade</label>
              <select className={style.select}>
                {returnOptions()}
              </select>
            </div>

            <div className={style.buttons}>
              <button className={`${style.button}`} onClick={() => setVisible(false)}>Cancelar</button>
              <button className={`${style.button}`} onClick={handleCreateTask}>Salvar Tarefa</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}