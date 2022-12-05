import React from 'react';
import './sidebar.css'
import logo from '../../img/logo.png'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav id="main-nav" class="sidebar">
            <a href="/historia" className='sidebar-link'>Historia</a>
            <a href="/centro" className='sidebar-link'>Centro de Interpretación</a>
            <a href="/naturaleza" className='sidebar-link'>Naturaleza</a>
            <Link to="/"><img src={logo} alt="" class="logo"/></Link>
            <a href="/desierto" className='sidebar-link'>Desierto de bolarque</a>
            <a href="/planea" className='sidebar-link'>Planea tu visita</a>
            <a href="/contacto" className='sidebar-link'>Contacto</a>
        </nav>
    )
}

export default Sidebar;

