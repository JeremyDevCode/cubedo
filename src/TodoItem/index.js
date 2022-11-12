import React from 'react';
import './TodoItem.css';
import check from '../assets/icons/check-solid.svg';
import trash from '../assets/icons/trash-can-regular.svg';
import tick from '../assets/icons/restore.webp';
import bomb from '../assets/icons/bomb.png';
import { TodoContext } from '../TodoContext';

function TodoItem(props) {

  const { 
    del,
  } = React.useContext(TodoContext);


  return (
    <li className={`TodoItem ${props.completed && 'TodoItem--active'}`}>
      <img 
        src={check}
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'} ${del === "delete" ? 'none' : 'Icon'}`} alt="check"/>
      <img
        src={tick}
        onClick={props.OnRestore}
        className={`Icon-restore ${del === "delete" ? 'Icon' : 'none'}`}
        alt="restore"/>

      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <img
        src={trash}
        onClick={props.onDelete} 
        className={`Icon-delete ${del === "delete" ? 'none' : 'Icon'}`} alt="trash"/>
      
      <img
        src={bomb}
        onClick={props.onFullDelete}
        className={`Icon-fulldelete ${del === "delete" ? 'Icon' : 'none'}`}
        alt="bomb"/>
    </li>
  );
}

export { TodoItem };