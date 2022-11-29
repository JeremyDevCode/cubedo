import React from "react";
import caution from "../../assets/icons/caution.png"
import './TodoError.css';

function TodoError({ language }) {

  return (
    <>
      <div className="CautionContainer">
        <img className="Caution" src={caution} alt="caution"/>
        <div className="TextContainer">
          <p>{language === 'spanish' ? 'Lo siento, ha ocurrido un error ' : 'Sorry, an error has occurred '}<a href="/"><span>{language === 'spanish' ? 'recarga la página' : 'refresh the page'}</span></a>{language === 'spanish' ? ', si el error persiste trata de ' : ', if the error persists try to '}<a href="mailto:jeremydevcode@gmail.com?subject=Let%27s+get+in+touch&body=I+was+interested+in+your+profile%2C+let%27s+talk%21"><span>{language === 'spanish' ? 'contactarnos' : 'contact us'}</span></a>.</p>
        </div>
      </div>
    </>
  )
}

export { TodoError };