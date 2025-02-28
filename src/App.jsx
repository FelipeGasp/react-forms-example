import { useState } from 'react'
import './App.css'

function App() {
  const[values,setValues] = useState({
    firstname:'',
    lastname: '',
    email: '',
    gender: '',
    phone_number: '',
    subject: '',
    file_attached: '',
    about: '',
  })
  function handleChanges (event) {
    setValues({...values, [event.target.name]:event.target.value})
  }
  function handleSubmit (event) {
    event.preventDefault()
    console.log(values)
  }
  function resetFun () {
    setValues({firstname: '',lastname: '',email:'',gender:'',phone_number:'',subject:'', file_attached:'',about:'  '})
  }

  return (
    <div className='main_container'>
      <h1>Formulario de React para abertura de chamado</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="primeiro_nome">Primeiro nome:*</label>
          <input type="text" placeholder='Fulano' name='firstname' onChange={(event) => handleChanges(event)} required value={values.firstname}/>
          
          <label htmlFor="sobrenome_nome">Sobrenome:*</label>
          <input type="text" placeholder='da Silva Souza' name='lastname'onChange={(event) => handleChanges(event)} required value={values.lastname}/>

          <label htmlFor="email">Email:*</label>
          <input type="email" placeholder='fulano.souza@exemplo.com' name='email' onChange={(event) => handleChanges(event)} required value={values.email}/>

          <label htmlFor="email">Contato:*</label>
          <input type="text" placeholder='(XX)XXXXX-XXXX' name='phone_number'onChange={(event) => handleChanges(event)} required value={values.phone_number}/>

          <label htmlFor="genero">Gênero:*</label>
          <input type="radio" name='gender' value={"masc"} onChange={(event) => handleChanges(event)} required/> Masculino
          <input type="radio" name='gender' value={"fem"} onChange={(event) => handleChanges(event)}/> Feminino
          <input type="radio" name='gender' value={"other"} onChange={(event) => handleChanges(event)}/> Outro

          <label htmlFor="subject" required>Assunto:</label>
          <select name="subject" id="subject" onChange={(event) => handleChanges(event)}>
            <option defaultChecked value="help">Ajuda</option>
            <option value="it">IT</option>
            <option value="application">Aplicação</option>            
          </select>

          <label htmlFor="file_attached">Anexo:</label>
          <input type="file" placeholder='Upload do arquivo' name='file_attached' onChange={(event) => handleChanges(event)}/>

          <label htmlFor="about">Descrição:*</label>
          <textarea name="about" id="about" cols={30} rows={10} onChange={(event) => handleChanges(event)} required value={values.about} placeholder='Descreva o chamado'></textarea>

          <button type='button' className='button-28' role='button-28' onClick={resetFun}>Limpar</button>
          <button type='submit' className='button-29' role='button-29'>Enviar</button>
<br />
          <span>* = Campo Obrigatório</span>
        </form>
    </div>
  ) 
}

export default App
