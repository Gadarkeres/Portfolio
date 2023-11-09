import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const[error_name, setError_name] = useState('')
    const[error_email, setError_email] = useState('')
    const[error_msg, setError_msg] = useState('')
    console.log(name, email, msg)

    const handleSubmit = (e) => {
        e.preventDefault()
        const checkEmpty = (field, setError, errorMessage) => {
            if (field === '') {
              setError(errorMessage);
              return true;
            }
            return false;
          };
          // Reset errors
          setError_name('');
          setError_email('');
          setError_msg('');
        
    
          const errorName = checkEmpty(name, setError_name, 'O nome é obrigatório');
          const errorEmail = checkEmpty(email, setError_email, 'Insira um e-mail válido.');
          const errorMsg = checkEmpty(msg, setError_msg, 'A mensagem é obrigatória.');
          if (errorName || errorEmail || errorMsg) {
            return;
          }
          setName('');
          setEmail('');
          setMsg('');


          alert('enviado');
        
    }



  return (
    <div className='container-contact'>
      <div className="title">
      <h2>Gostou do meu perfil? vamos conversar!</h2>
      <p>Costumo responder rapido.</p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="form">
            <div className="name">
                <label htmlFor='nameIn'>Seu nome:</label>
                <input type="text" id='nameIn' placeholder='Nome'value={name} onChange={(e) => setName(e.target.value)} />
                <small>{error_name}</small>
               
                </div>
                <div className="email">
                    <label htmlFor='emailIn'>Seu E-mail:</label>
                <input type="Email" id='emailIn' placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)} />
                <small>{error_email}</small>
                </div>
                <div className="msg">
                <label htmlFor='textareaIn'>Sua mensagem</label>
                <textarea name="textarea" id="textareaIn" cols="30" rows="10" placeholder='Escreva sua mensagem...'value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                <small>{error_msg}</small>
               
                </div>
                <input type="submit" value="ENVIAR" />
        </div>
      </form>
    </div>
  )
}

export default Contact