import style from './style.module.css';

export const Table = () => {

  return (
    <>
      <div className={style.container}>
        <div className={style.headerContainer}>
          <h2 className={style.title}>Todas as tarefas</h2>
          <span className={style.numberTasks}>8 tarefas</span>
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
            <tr className={style.tableRow}>
              <td className={`${style.tableData} ${style.description}`}>Criar wireframes da interface principal</td>
              <td className={`${style.tableData} ${style.date}`}>16/03/2026</td>
              <td className={style.tableData}>
                <span className={style.toDo}>A Fazer</span>
              </td>
              <td className={`${style.tableData}`}>
                <span className={style.lowPriority}>&bull; Baixa</span>
              </td>
            </tr>
            <tr className={style.tableRow}>
              <td className={`${style.tableData} ${style.description}`}>Criar wireframes da interface principal</td>
              <td className={`${style.tableData} ${style.date}`}>16/03/2026</td>
              <td className={`${style.tableData}`}>
                <span className={style.toDo}>A Fazer</span>
              </td>
              <td className={`${style.tableData}`}>
                <span className={style.lowPriority}>&bull; Baixa</span>
              </td>
            </tr>
            <tr className={style.tableRow}>
              <td className={`${style.tableData} ${style.description}`}>Criar wireframes da interface principal</td>
              <td className={`${style.tableData} ${style.date}`}>16/03/2026</td>
              <td className={`${style.tableData}`}>
                <span className={style.blocked}>Bloqueado</span>
              </td>
              <td className={`${style.tableData}`}>
                <span className={style.mediumPriority}>&bull; Média</span>
              </td>
            </tr>
            <tr className={style.tableRow}>
              <td className={`${style.tableData} ${style.description}`}>Criar wireframes da interface principal</td>
              <td className={`${style.tableData} ${style.date}`}>16/03/2026</td>
              <td className={`${style.tableData}`}>
                <span className={style.working}>Fazendo</span>
              </td>
              <td className={`${style.tableData}`}>
                <span className={style.mediumPriority}>&bull; Média</span>
              </td>
            </tr>
            <tr className={style.tableRow}>
              <td className={`${style.tableData} ${style.description}`}>Criar wireframes da interface principal</td>
              <td className={`${style.tableData} ${style.date}`}>16/03/2026</td>
              <td className={`${style.tableData}`}>
                <span className={style.working}>Fazendo</span>
              </td>
              <td className={`${style.tableData}`}>
                <span className={style.highPriority}>&bull; Alta</span>
              </td>
            </tr>
            <tr className={style.tableRow}>
              <td className={`${style.tableData} ${style.description}`}>Criar wireframes da interface principal</td>
              <td className={`${style.tableData} ${style.date}`}>16/03/2026</td>
              <td className={`${style.tableData}`}>
                <span className={style.done}>Concluído</span>
              </td>
              <td className={`${style.tableData}`}>
                <span className={style.highPriority}>&bull; Alta</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}