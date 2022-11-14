import React from 'react';

import logo from '../assets/icons/logo.png';
import spanish from "../assets/icons/spanish.png";
import english from "../assets/icons/english.png";
import './Navbar.css';

function NavBar({theme, toggleTheme, language, addSpanish, addEnglish }) {

    const onClickIdiom = () => {
      if(language === 'spanish') {
        addEnglish(); 
      } else {
        addSpanish();
      }
    }  

  return (
    <>
    <div className='NavContainer'>
      <div className="LogoContainer">
        <a href='./'><img src={logo} alt='logo'/></a>
      </div>  

      <div className={'Text'}>
        <h2>{language === 'spanish' ? 'Lista de tareas' : 'Todo List'}</h2>
      </div>
      
      <div className='ChangeContainer'>
        <div className='Language'>
          <img src={language === 'spanish' ? `${spanish}` : `${english}`} onClick={onClickIdiom} alt="idiom"/>
        </div>

        <div className="ChangeMode">
            <div onClick={toggleTheme} defaultChecked={theme === "light"} className="light dark"></div>
        </div>
      </div>
    </div>

    </>
  )
}

export { NavBar };