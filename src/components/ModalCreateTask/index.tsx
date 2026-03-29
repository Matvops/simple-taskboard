import style from './style.module.css';


type ModalCreateTask = {
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
};


export const ModalCreateTask = ({ visible, setVisible }: ModalCreateTask) => {

  return (
    <>
      {visible && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <h1 className={style.title}>Nova tarefa</h1>

            <div>
              <label className={style.label}>Título
                <input type="text" className={style.input} placeholder='Digite...' />
              </label>
            </div>

            <div className={style.selectContainer}>
              <label className={style.label}>Prioridade</label>
              <select className={style.select}>
                <option>Baixa</option>
                <option>Média</option>
                <option>Alta</option>
              </select>
            </div>

            <div className={style.buttons}>
              <button className={`${style.button}`} onClick={() => setVisible(false)}>Cancelar</button>
              <button className={`${style.button}`}>Salvar Tarefa</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}