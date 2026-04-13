import { PlusIcon } from 'lucide-react';
import style from './style.module.css';
import { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/TasksContext';
import { ModalCreateTask } from '../ModalCreateTask';
import { Utils } from '../../utils/Utils';
import { DragDropContext, Draggable, Droppable, type DropResult } from '@hello-pangea/dnd';
import type { Stage } from '../../types/Stage';
import type { Task } from '../../interfaces/Task';

export const Steps = () => {

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<Stage>('toDo');
  const { state, setState } = useContext(TaskContext);

  const prioritys = {
    lowPriority: 'Baixa',
    mediumPriority: 'Média',
    highPriority: 'Alta',
  }

  function openModal(type: Stage) {
    setType(type);
    setVisible(true)
  }

  const returnTasks = (type: Stage) => {

    return state.tasks[type]?.map((task, key) => {

      if (task.stage === type) {

        return (
          <>
            <Draggable key={key} draggableId={`${task.stage}-${task.id}`} index={key}>

              {(provided) => (
                <div className={style.content} key={key} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                  <span className={style.description}>{task.name}</span>
                  <div className={style.contentFooter}>
                    <p className={`${style.priority} ${style[task.priority]}`}>&bull; {prioritys[task.priority]}</p>
                    <span className={style.createDate}>{Utils.numberToDate(task.createdAt)}</span>
                  </div>
                </div>
              )}
            </Draggable>
          </>
        )
      };

    });
  }

  function handleOnDragEnd(result: DropResult) {
    if(!result.destination) return;

    const sourceDroppableId = result.source?.droppableId;
    const sourceIndex = result.source?.index;

    const destinationDroppableId = result.destination?.droppableId;
    const destinationIndex = result.destination?.index;

   
    if (
        (destinationDroppableId === 'toDo' || destinationDroppableId === 'blocked' || destinationDroppableId === 'working' || destinationDroppableId === 'done')
        && (sourceDroppableId === 'toDo' || sourceDroppableId === 'blocked' || sourceDroppableId === 'working' || sourceDroppableId === 'done')
    ) 
    {

      const source = getTask(sourceDroppableId, sourceIndex);
      removeTask(source);

      source.id = destinationIndex;
      source.stage = destinationDroppableId;

      addTask(source, destinationDroppableId)    
    }
  }

  function getTask(droppableId: Stage, id: number): Task {
    return state.tasks[droppableId].filter(task => task.id == id)[0];
  }

  function removeTask(source: Task) {

    setState(prevState => {
      return {
        ...prevState,
        tasks: {
          ...prevState.tasks,
          [source.stage]: prevState.tasks[source.stage].filter(task => task.id !== source.id).map(task => decrementId(source, task))
        }
      }
    })
  }
  
  function decrementId(source: Task, task: Task): Task
  {

    if(task.id > source.id) {
      task.id = task.id - 1;
    }

    return task;
  }

  function addTask(task: Task, stage: Stage) {
     setState(prevState => {
        return {
          ...prevState,
          tasks: {
            ...prevState.tasks,
            [stage]: ordenaArray(task, ...prevState.tasks[stage])
          }
        }
      })
  }
  
  function ordenaArray(newTask: Task, ...tasks: Task[]): Task[] 
  {

    tasks = tasks.map((task) => {

      if(task.id >= newTask.id) {
        task.id = task.id + 1;
      }

      return task;
    });

    tasks.push(newTask);

    tasks.sort((a, b) => a.id - b.id);

    return tasks;
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className={style.steps}>

          <div className={style.step}>
            <div className={style.headerCard}>
              <div>
                <h2 className={style.title}><span className={`${style.toDo} ${style.bullet}`}>&bull;</span> A Fazer</h2>
                <span className={style.numberOfTasks}>{state.tasks['toDo'].length}</span>
              </div>

              <button className={style.buttonHeader} onClick={() => openModal('toDo')}>
                <PlusIcon /> Adicionar
              </button>
            </div>

            <Droppable droppableId="toDo" >
              {(provided) => (
                <div className={style.contentCard} ref={provided.innerRef} {...provided.droppableProps}>
                  {returnTasks('toDo')}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className={style.step}>
            <div className={style.headerCard}>
              <div>
                <h2 className={style.title}><span className={`${style.blocked} ${style.bullet}`}>&bull;</span> Bloqueado</h2>
                <span className={style.numberOfTasks}>{state.tasks['blocked'].length}</span>
              </div>
              <button className={style.buttonHeader} onClick={() => openModal('blocked')}>
                <PlusIcon /> Adicionar
              </button>
            </div>

            <Droppable droppableId="blocked" >
              {(provided) => (
                <div className={style.contentCard} ref={provided.innerRef} {...provided.droppableProps}>
                  {returnTasks('blocked')}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className={style.step}>
            <div className={style.headerCard}>
              <div>
                <h2 className={style.title}><span className={`${style.working} ${style.bullet}`}>&bull;</span> Fazendo</h2>
                <span className={style.numberOfTasks}>{state.tasks['working'].length}</span>
              </div>
              <button className={style.buttonHeader} onClick={() => openModal('working')}>
                <PlusIcon /> Adicionar
              </button>
            </div>

            <Droppable droppableId="working" >
              {(provided) => (
                <div className={style.contentCard} ref={provided.innerRef} {...provided.droppableProps}>
                  {returnTasks('working')}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className={style.step}>

            <div className={style.headerCard}>
              <div>
                <h2 className={style.title}><span className={`${style.done} ${style.bullet}`}>&bull;</span> Concluído</h2>
                <span className={style.numberOfTasks}>{state.tasks['done'].length}</span>
              </div>
              <button className={style.buttonHeader} onClick={() => openModal('done')}>
                <PlusIcon /> Adicionar
              </button>
            </div>

            <Droppable droppableId="done" >
              {(provided) => (
                <div className={style.contentCard} ref={provided.innerRef} {...provided.droppableProps}>
                  {returnTasks('done')}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>

      <ModalCreateTask
        visible={visible}
        setVisible={setVisible}
        type={type}
      />
    </>
  );
}