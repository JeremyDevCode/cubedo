import React from 'react'
import { useNavigate } from 'react-router-dom';
import puzzle from "../../assets/icons/puzzle-dynamic-clay.png";
import person from "../../assets/icons/person.png";
import check from '../../assets/icons/check-solid.svg';
import edit from '../../assets/icons/pen-solid.svg'
import trash from '../../assets/icons/trash-can-regular.svg';
import calendar from '../../assets/icons/calendar.png';
import whatsapp from '../../assets/icons/Whatsapp3d.png';
import linkedin from '../../assets/icons/LinkedIn3d.png';
import discord from '../../assets/icons/Discord3d.png';
import spanish from "../../assets/icons/spanish.png";
import english from "../../assets/icons/english.png";

import { useTodos } from "../useTodos";

import "./HomePage.css";
import { Toaster, toast } from 'react-hot-toast';
import CopyToClipboard from 'react-copy-to-clipboard';

function HomePage() {


    
    const { state, stateUpdaters } = useTodos();
    const { language } = state;
    const { onClickIdiom } = stateUpdaters;
  
    const navigate = useNavigate();

    const goToTodoList = () => {
        navigate('/tasks/');
    }

    return ( 
        <>

            <nav className='Navbar'>
                <img src={puzzle} alt="logo"/>
                <div>
                        <div className='ChangeContainer'>
                            <div className='Language'>
                            <img src={language === 'spanish' ? `${spanish}` : `${english}`} onClick={onClickIdiom} alt="idiom"/>
                            </div>
                        </div>
                        <li>
                            <a href='/cubedo/#/tasks/'>{language === 'spanish' ? 'Tareas' : 'Tasks'}</a>
                        </li>
                        <li>
                            <a href="/cubedo/#/project/">{language === 'spanish' ? 'Proyecto' : 'Project'}</a>
                        </li>
                        <li>
                            <a href="/cubedo/#/contact/" target="_blank">{language === 'spanish' ? 'Contacto' : 'Contact'}</a>
                        </li>
                </div>
            </nav>

            <header className='Header'>
                <div>
                    <h1>{language === 'spanish' ? 'Gestiona tus tareas a través de una lista' : 'Manage your tasks through a task list'}
                    </h1>
                    <p>
                    {language === 'spanish' ? 'Organiza tu día con la ayuda de una agenda que guarda recordatorios de las tareas que debes realizar a lo largo del día.' : 'Organize your day with the help of an agenda that saves reminders for the tasks you must do throughout the day.'}</p>
                    <button
                        onClick={goToTodoList}
                    >{language === 'spanish' ? 'Empezar' : 'Get Started'}</button>
                </div>
                <img src={person} alt="aa"/>
            </header>

            <section className='ServicesSection'>
                <h1>{language === 'spanish' ? 'Beneficios de usar nuestra aplicación' : 'Benefits of using our application'}</h1>
                    <div className="ServicesContainer">
                        <div>
                            <div>
                                <img src='https://cdn-icons-png.flaticon.com/512/1950/1950715.png' alt="todo"/>
                            </div>
                            <h2>{language === 'spanish' ? 'Tareas Simples' : 'Simple Tasks'}</h2>
                            <p>{language === 'spanish' ? 'Podrás añadir tareas muy fácilmente y completarlas cuando las necesites con un solo clic.' : 'You will be able to add tasks very easily and complete them when you need them with just one click.'}</p>
                        </div>
                        <div>
                            <div>
                                <img src='https://cdn-icons-png.flaticon.com/512/2011/2011724.png' alt="todo"/>
                            </div>
                            <h2>{language === 'spanish' ? 'Diseño intuitivo' : 'Intuitive design'}</h2>
                            <p>{language === 'spanish' ? 'Tiene un diseño que te ayuda a adaptarte rápidamente y no perderte intentando crear, completar o eliminar tus tareas.' : 'It has a design that helps you adapt quickly and not get lost trying to create, complete or even delete your tasks.'}</p>
                        </div>
                        <div>
                            <div>
                                <img src='https://cdn-icons-png.flaticon.com/512/3246/3246843.png' alt="todo"/>
                            </div>
                            <h2>{language === 'spanish' ? 'Servicio' : 'Support'}</h2>
                            <p>{language === 'spanish' ? 'Soporte activo a los usuarios del sitio web con el fin de mejorar su rendimiento y agregar nuevas funciones.' : 'Active support for users of the website in order to improve its performance and add new features.'}</p>
                        </div>
                    </div>
            </section>

            <section className='ViewContainer'>
                <div className='PhoneBorder'>
                    <div className='PhoneTop'>
                        <div className='PhoneCam'>

                        </div>
                        <div className='PhoneBar'>

                        </div>
                    </div>
                    <div className='PhoneScreen'>
                        <h1>{language === 'spanish' ? 'Crear tareas' : 'Todo Input'}</h1>
                        <div className='PhoneTodo'>
                            <div>
                                <h5>{language === 'spanish' ? 'Escribir una nueva tarea' : 'Write a new task'}</h5>
                            </div>
                            <div>
                                <h5>{language === 'spanish' ? 'Nueva tarea' : 'New Todo'}
                                </h5>
                            </div>
                            <div>                          
                                <h5>{language === 'spanish' ? 'Añadir nueva tarea' : 'Add New Task'}</h5>
                            </div>
                        </div>
                        <h1>{language === 'spanish' ? 'Lista de tareas' : 'Todo List'}</h1>
                        <div className='PhoneSection'>
                            <div>
                                <h5>{language === 'spanish' ? 'Todos' : 'All'}</h5>
                            </div>

                            <div>
                                <h5>{language === 'spanish' ? 'Hechas' : 'Done'}</h5>
                            </div>

                            <div>
                            <h5>{language === 'spanish' ? 'Hacer' : 'Todo'}</h5>
                            </div>  
                        </div>
                        <div className='PhoneItem'>
                            <div>
                                <img src={check} alt='a'/>
                                <span>{language === 'spanish' ? 'Dibujar' : 'Sketching'}</span>
                            </div>
                            <div>
                                <img src={edit} alt='a'/>
                                <img src={trash} alt='a'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='TextPhoneContainer'>
                    <h1>CubeDo</h1>
                    <p>{language === 'spanish' ? 'CubeDo es una aplicación web para listar tareas pendientes. Te ayuda a administrar mejor tu tiempo para realizar las tareas que deseas completar, evitando distracciones.' : 'CubeDo is a web application to list pending tasks that you must do. Helps you better manage your time while doing the tasks you want to complete, avoiding distractions.'}</p>
                    <span>{language === 'spanish' ? 'Si estás interesado en contratar con el creador ' : 'If you are interested in contracting with the creator '} <a href='mailto:jeremydevcode@gmail.com?subject=Let%27s+get+in+touch&body=I+was+interested+in+your+profile%2C+let%27s+talk%21'>{language === 'spanish' ? 'clic aquí' : 'click here'}</a>.</span>
                    <img src={calendar} alt='pic'/>
                </div>
            </section>

            <footer className='FooterSection'>
                
                <div>
                    <a href='https://api.whatsapp.com/send/?phone=593978686750&text=Hi+Jeremy%21+I%27m+interested+in+your+profile.+Let%27s+Talk' target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/></a>
                        
                    <a href='https://www.linkedin.com/in/jeremydeveloper' target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>   
                        
                    <CopyToClipboard text="Jeremy  ☁#8166">
                    <img src={discord} onClick={() => toast.success(`${language === 'spanish' ? '¡Copiado!' : 'Copied!'}`, {style: { background: "#000000", color: "#FFFFFF" }})} alt="discord"/>
                    </CopyToClipboard>
                </div>
                <p>2022 CudeDo © All Right Reserved</p>
                <Toaster 
                    position="bottom-right"
                />
            </footer>

        </>
  )
}

export { HomePage };