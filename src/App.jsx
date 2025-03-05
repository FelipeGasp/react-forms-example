import './App.css'
import './Form.jsx'
import Form from './Form.jsx'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('menu')
  return(
    <div className='menu'>
      <div className='Option'>
        <h1 onClick={()=> setPage("form")}>Abrir Chamado</h1>
      </div>
      <div className='Option'>
        <h1>Ver Chamados</h1>
      </div>
      <div className='Option'>
        <h1>Acompanhar Chamado</h1>
      </div>
      {page === 'form' &&
        <Form setPage={setPage} />
      }
    </div>
  )
}

export default App
