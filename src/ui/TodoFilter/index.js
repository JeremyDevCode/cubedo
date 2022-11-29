import React from 'react';
import trash from "../../assets/icons/trash-solid.svg";
import arrow from "../../assets/icons/arrow.png";
import './TodoFilter.css';

function TodoFilter({ del, toggleFilterDeleted }) {

  return (
    <button     
      className={`TodoFilter ${del === 'delete' ? 'out' : 'icon'}`}
      onClick={toggleFilterDeleted}
    >
    <img src={del === "delete" ? arrow : trash}  alt="filter"/>
    </button>
  );
}

export { TodoFilter };