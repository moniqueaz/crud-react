import './Nav.css'
import NavItems from './NavItems'
import React from 'react'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <NavItems path="#/" icon="home" text="Início"/>
      <NavItems path="#/users" icon="users" text="Usuários"/>
      <a href='/'>
        <i className='fa fa-home'>texto</i>
    </a> 
    </nav>
  </aside>