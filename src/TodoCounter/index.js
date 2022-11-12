import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { completedTodos, totalTodos, totalDelete, del, language } = React.useContext(TodoContext);
  return (
    <>
      <h2 className={`${del === "delete" ? 'none' : 'TodoCounter'}`}>{language === 'spanish' ? `Has completado ${ completedTodos } de ${ totalTodos } tareas` : `You have completed ${ completedTodos } of ${ totalTodos } tasks`}</h2>

      <h2 className={`${del === "delete" ? 'TodoCounter' : 'none'}`}>{language === 'spanish' ? `Hay ${totalDelete} tareas en la papelera` : `There are ${totalDelete} tasks in the recycle bin`}</h2>
    </>
  )
}

export { TodoCounter };