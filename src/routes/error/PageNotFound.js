import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow-left-solid.svg";
import puzzle from "../../assets/icons/puzzle-dynamic-clay.png";
import discord from "../../assets/icons/discord.png";
import github from "../../assets/icons/github-logo.png";
import linkedin from "../../assets/icons/linkedin.png";
import error from "../../assets/icons/takeaway-cup-dynamic-color.png"
import './PageNotFound.css';
import { useTodos } from "../useTodos";
import CopyToClipboard from "react-copy-to-clipboard";
import { Toaster, toast } from 'react-hot-toast';
function PageNotFound() {

    const { state } = useTodos();
    const { language } = state;

    const navigate = useNavigate();

  return (
    <>
        <div className="PageNotFound">
            
            <div className="NotFoundContainer">
                <div className="NotFoundContainerSpace">
                    <div className="menu">
                        <img src={puzzle} alt="puzzle" onClick={() => navigate('/')}/>
                        
                        <ul>
                            <li>
                                <a href="/cubedo/#/tasks">{language === 'spanish' ? 'Tareas' : 'Tasks'}</a>
                            </li>
                            <li>
                                <a href="/cubedo/#/project/">{language === 'spanish' ? 'Proyecto' : 'Project'}</a>
                            </li>
                            <li>
                                <a href="/cubedo/#/contact/">{language === 'spanish' ? 'Contacto' : 'Contact'}</a>
                            </li>
                        </ul>
                       
                    </div>
                    <div>
                        <h1>{language === 'spanish' ? "No se ha encontrado" : "You're Lost in Space"}</h1>
                        <p><span>{language === 'spanish' ? "Error 404, oops! " : "404 Error, oops! "}
</span>{language === 'spanish' ? `Esta página no existe o ha sido eliminada. Por favor, revisa tu internet o vuelve al inicio` : "This page doesn't exist or was removed. Please, check your internet or go back home"}</p>
                        <div className="position">
                            {/* <button onClick={() => navigate('/')}>Home</button>
                            <button onClick={() => navigate(-1)}>Go Back</button> */}
                            <img src={error} alt="404" className="error404"/>
                            <img src={arrow} alt="arrow" className="arrow" onClick={() => navigate(-1)}/>
                        </div>
                    </div>
                </div>
                <div className="Social">
                <a href="https://github.com/JeremyDevCode" target="_blank" rel="noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/jeremydeveloper" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
                <CopyToClipboard text="Jeremy  ☁#8166">
                    <img src={discord} onClick={() => toast.success(`${language === 'spanish' ? '¡Copiado!' : 'Copied!'}`, {style: {background: "#262424", color: "#FFFFFF" } } )} alt="discord"/>
                </CopyToClipboard>
                </div>
            </div>
            <div className="ImageContainer">
                <img src={error} alt="404"/>
            </div>
            <Toaster
                position="bottom-right"
            />
        </div>
    </>
  )
}

export { PageNotFound };