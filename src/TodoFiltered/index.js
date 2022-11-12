import React from "react";
import filterrgb from "../assets/icons/eyedropper-dynamic-gradient.png";
import filterc from "../assets/icons/eyedropper-dynamic-color.png";
import './TodoFiltered.css';
import { TodoContext } from "../TodoContext";

function TodoFiltered() {

    const { fil, language } = React.useContext(TodoContext);

  return (
    <>
      <div className="FilterContainer">
        <img className="Filterrgb" src={filterrgb} alt="filterrgb"/>
        <img className="Filterc" src={filterc} alt="filterc"/>
        <div  className="TextFilterContainer ">
            <p>{language === 'spanish' ? 'No se ha encontrado ninguna ' : 'No '}<span>{language === 'spanish' ? 'tarea ' : 'task '}</span>{language === 'spanish' ? `filtrando los ${fil === "complete" ? "incompletos" : "completos" }, si crees que se trata de un error, ` : `found filtering the ${fil === "complete" ? "incompletes" : "completed" }, if you think it is an error, `} <a href="mailto:jeremydevcode@gmail.com?subject=Let%27s+get+in+touch&body=I+was+interested+in+your+profile%2C+let%27s+talk%21"><span>{language === 'spanish' ? 'contáctanos' : 'contact us'}</span></a>.</p>
        </div>
      </div>
    </>
  )
}

export { TodoFiltered };