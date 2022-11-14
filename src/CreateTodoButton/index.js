import React from 'react';

import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {

  const onClickButton = () => {  
    setOpenModal((openModal) => !openModal);
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