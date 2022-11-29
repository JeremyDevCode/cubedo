import React from 'react';

import spanish from "../../assets/icons/spanish.png";
import english from "../../assets/icons/english.png";
import './TodoOptions.css';

function TodoOptions({ toggleFilterComplete, toggleFilterUncomplete, fil, language, addSpanish, addEnglish }) {

    const onClickIdiom = () => {
      if(language === 'spanish') {
        addEnglish(); 
      } else {
        addSpanish();
      }
    }  

 
  return (
    <div className="TodoFilterContainer ">
            
    <input id="complete" type="checkbox" checked={fil === "complete"} onChange={toggleFilterComplete} />
    <label className="label" htmlFor="complete"></label>
    <span className='span'>{language === 'spanish' ? 'Incompleto' : 'Incomplete'}</span>
  
    
    <input id="uncomplete" type="checkbox" checked={fil === "uncomplete"} onChange={toggleFilterUncomplete} />
    <label className="label" htmlFor="uncomplete"></label>
    <span className='span'>{language === 'spanish' ? 'Completo' : 'Completed'}</span>

    <div className='language'>
          <img src={language === 'spanish' ? `${spanish}` : `${english}`} onClick={onClickIdiom} alt="idiom"/>
    </div>
    <p className='span'>{language === 'spanish' ? 'Idioma' : 'Idiom'}</p>
    
    </div>
  );
}

export { TodoOptions };