import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  const { openModal } = React.useContext(TodoContext);

  const onClickButton = () => {  
    props.setOpenModal((openModal) => !openModal);
  }

  return (
    <button     
      className={`CreateTodoButton ${openModal && 'CreateTodoButton--active'}`}
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };