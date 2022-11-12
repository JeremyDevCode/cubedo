import React from "react";
import document from "../assets/icons/document.png"

import './TodoStart.css';
import { TodoContext } from "../TodoContext";

function TodoStart() {

  const { language } = React.useContext(TodoContext);

  

  return (
    <>
      <div className="DocumentContainer">
        <img src={document} alt="document"/>
        <div  className="TextContainer ">
          <p>{language === 'spanish' ? 'Parece que aún no has creado ninguna' : 'Looks like you have not created any'}  <span>{language === 'spanish' ? 'tarea' : 'task'}</span>{language === 'spanish' ? ', utiliza el botón ' : ' yet, use the button '}<span  className="Create ">+</span><span>{language === 'spanish' ? ' para crearlo' : ' to create one'}</span>.</p>
        </div>
      </div>
    </>
  )
}

export { TodoStart };