import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
  <React.Fragment>
    <Header {...props}/>
    <main className="conteudo">
      Conteudo
    </main>
  </React.Fragment>