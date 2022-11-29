import React from 'react';

import './CreateTodoButton.css';

function CreateTodoButton({ onClick }) {

  return (
    <button     
      className={`CreateTodoButton`}
      onClick={onClick}
    >
      +
    </button>
  );
}

export { CreateTodoButton };