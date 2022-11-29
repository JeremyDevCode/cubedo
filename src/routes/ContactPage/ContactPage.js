import React from 'react'
import chat from "../../assets/icons/chat-bubble-dynamic-color.png";
import whatsapp from '../../assets/icons/Whatsapp3d.png';
import linkedin from '../../assets/icons/LinkedIn3d.png';
import discord from '../../assets/icons/Discord3d.png';
import behance from '../../assets/icons/Behance3d.png';
import dribble from '../../assets/icons/Dribbble3d.png';

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from 'react-hot-toast';

import './ContactPage.css';
import { useTodos } from '../useTodos';

function ContactPage() {

    const { state } = useTodos();
    const { language } = state;

    const $form = document.querySelector('.ContactMedia');

    $form?.addEventListener('submit', handleSubmit);

    

    async function handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(this)
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })

        if(response.ok) {
            this.reset()
            toast.success(`${language === 'spanish' ? '¡Enviado!' : 'Send!'}`, {style: {background: "#F6FAFB" } },);
        } else {
            toast.error(`${language === 'spanish' ? '¡Error!' : 'Error!'}`, {style: {background: "#F6FAFB" } } );
        }
    }

  return (
    <section className='ContactSection'>

        <div className='LeftContent'>
            <h5>CubeDo</h5>
            <div>
            <h1>{language === 'spanish' ? 'Comencemos nuestro viaje' : 'Start your  journey with us.'}</h1>
            <p>{language === 'spanish' ? 'Si tienes alguna duda, algún error o necesitas ayuda para desarrollar tus proyectos.' : 'If you have any questions, any errors or need help to develop your projects.'}</p>
            </div>
            <div className='LeftContentImage'>
            <img src={chat} alt='Contact'/>
            </div>
        </div>

        <div className='RightContent'>
            <h1>{language === 'spanish' ? 'Contáctame por email o mis redes sociales' : 'Contact me by email or my social networks'}</h1>
        
                <form className='ContactMedia' action="https://formspree.io/f/myyvaqdo" method="post">
                <label htmlFor="email">
                    {language === 'spanish' ? 'Correo' : 'Email'}
                </label>
                <input name="Email" id="email" type="email" required/>
                <label htmlFor="subject">
                {language === 'spanish' ? 'Asunto' : 'Subject'}
                </label>
                <input name="Subject" id="subject" type="text" required/>
                <label htmlFor="message"> {language === 'spanish' ? 'Mensaje' : 'Message'}</label>
                <textarea className='ContactTextArea' name="Message" id="message" required/>
                <button> {language === 'spanish' ? 'Enviar' : 'Send'}</button>
                </form>
            

            <div className='SocialMedia'>
                    <a href='https://api.whatsapp.com/send/?phone=593978686750&text=Hi+Jeremy%21+I%27m+interested+in+your+profile.+Let%27s+Talk' target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/></a>
                        
                    <a href='https://www.linkedin.com/in/jeremydeveloper' target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>   
                    <CopyToClipboard text="Jeremy  ☁#8166">
                    <img src={discord} onClick={() => toast.success(`${language === 'spanish' ? '¡Copiado!' : 'Copied!'}`, {style: {background: "#F6FAFB" } } )} alt="discord"/>
                    </CopyToClipboard>
                    <a href='https://www.behance.net/jeremymosquera' target="_blank" rel="noreferrer"> <img src={behance} alt="behance"/></a>
                    <a href='https://dribbble.com/JeremyDeveloper1' target="_blank" rel="noreferrer"><img src={dribble}  alt="dribble"/></a>
            </div>

            <Toaster 
                position="bottom-right"
            />
        </div>

    </section>
  )
}

export { ContactPage };