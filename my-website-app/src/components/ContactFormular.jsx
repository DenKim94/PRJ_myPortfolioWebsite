import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './../styles/ContactFormular.css'
import './../styles/Button.css'

const ContactFormular = () => {

    const formData = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("To-Do: E-Mail senden...")
        console.log('formData: ', formData);
    }

    return ( 
        <form className='contact-form' ref={formData} onSubmit={sendEmail}>
            <div className='form-label'>
                <label id='name-label'>Name:</label>
                <input type="text" 
                        name="from_UserName"
                        placeholder='<Dein Name>' 
                        required/>
            </div>
            <div className='form-label'>
                <label className='email-label'>E-Mail:</label>
                <input type="email" 
                        name="from_UserEmail"
                        placeholder='<Deine E-Mail>'  
                        required/>
            </div>
            <div className='message-container'>
                <label className='message-label'>Nachricht:</label>
                <textarea id="text-field" 
                            name="message"
                            placeholder='<Deine Nachricht an mich>' 
                            required/>
            </div>
            
            {/* To-Do: Captcha */}

            <input className="generic-button" id='send-button' type="submit" value="Senden" />
        </form>
     );
}
 
export default ContactFormular;