import React from 'react';
import check from '../../assets/icons/check-solid.svg';
import edit from '../../assets/icons/pen-solid.svg'
import trash from '../../assets/icons/trash-can-regular.svg';
import tick from '../../assets/icons/restore.webp';
import bomb from '../../assets/icons/bomb.png';
import './TodoItem.css';

function TodoItem({ completed, onComplete, OnRestore, onEdit, onDelete, onFullDelete, text, del }) {

  return (
    <li className={`TodoItem ${completed && 'TodoItem--active'}`}>
      <img 
        src={check}
        onClick={onComplete}
        className={`Icon Icon-check ${completed && 'Icon-check--active'} ${del === "delete" ? 'none' : 'Icon'}`} alt="check"/>
      <img
        src={tick}
        onClick={OnRestore}
        className={`Icon-restore ${del === "delete" ? 'Icon' : 'none'}`}
        alt="restore"/>

      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <img
        src={edit}
        onClick={onEdit} 
        className={`Icon-edit ${del === "delete" ? 'none' : 'Icon'}`} alt="trash"/>
      <img
        src={trash}
        onClick={onDelete} 
        className={`Icon-delete ${del === "delete" ? 'none' : 'Icon'}`} alt="trash"/>
      
      <img
        src={bomb}
        onClick={onFullDelete}
        className={`Icon-fulldelete ${del === "delete" ? 'Icon' : 'none'}`}
        alt="bomb"/>
    </li>
  );
}

export { TodoItem };