import React from "react";
import explorerp from "../assets/icons/explorer-dynamic-premium.png";
import explorerc from "../assets/icons/explorer-dynamic-colorx.png";
import './TodoSearched.css';


function TodoSearched({ searchValue, language }) {
  
  return (
    <>
      <div className="ExplorerContainer">
        <img className="Explorerc" src={explorerc} alt="explorerc"/>
        <img className="Explorerp" src={explorerp} alt="explorerp"/>
        <div  className="TextExplorerContainer ">
            <p>{language === 'spanish' ? 'Lo sentimos, no se ha encontrado ninguna ' : 'Sorry, no '}<span>{language === 'spanish' ? 'tarea ' : 'task'}</span>{language === 'spanish' ? 'buscando ' : ' was found by searching '}<span>{searchValue}</span>{language === 'spanish' ? ', si se trata de un error, ' : ', if this is an error, '}<a href="mailto:jeremydevcode@gmail.com?subject=Let%27s+get+in+touch&body=I+was+interested+in+your+profile%2C+let%27s+talk%21"><span>{language === 'spanish' ? 'contáctanos' : 'contact us'}</span></a>.</p>
        </div>
      </div>
    </>
  )
}

export { TodoSearched };