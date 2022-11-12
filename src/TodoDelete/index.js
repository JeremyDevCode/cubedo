import React from "react";
import trash from '../assets/icons/trash-can-regular.svg';
import trashrgb from "../assets/icons/trash-can-dynamic-gradient.png"
import trashp from "../assets/icons/trash-can-dynamic-premium.png"
import { TodoContext } from "../TodoContext";
import './TodoDelete.css';


function TodoDelete() {

  const { language } = React.useContext(TodoContext);

  return (
    <>
      <div className="TrashContainer">
        <img className="Trashrgb" src={trashrgb} alt="trash"/>
        <img className="Trashp" src={trashp} alt="trashp"/>
        <div  className="TextTrashContainer ">
          <p>{language === 'spanish' ? 'La papelera de reciclaje aún está vacía, no hay ni una' : `The recycle bin is still empty, there is no`} <span>{language === 'spanish' ? ' tarea' : 'task'}</span>{language === 'spanish' ? ', ¡prueba el botón' : ', try the button'}<span  className="DeleteExample"><img src={trash} alt="Delete example"/></span><span>{language === 'spanish' ? ' para borrar alguno!' : 'to remove one!'}</span></p>
        </div>
      </div>
    </>
  )
}

export { TodoDelete };