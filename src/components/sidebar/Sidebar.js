import React from 'react';
import './sidebar.css'
import logo from '../../img/logo.png'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav id="main-nav" class="sidebar">
            <Link to="/historia" className='sidebar-link'>Historia</Link>
            <Link to="/centro" className='sidebar-link'>Centro de Interpretación</Link>
            <Link to="/naturaleza" className='sidebar-link'>Situación y naturaleza</Link>
            <Link to="/desierto"><img src={logo} alt="" class="logo"/></Link>
            <Link to="/Linkrte" className='sidebar-link'>Arte</Link>
            <Link to="/planea" className='sidebar-link'>Planea tu visita</Link>
            <Link to="/contacto" className='sidebar-link'>Contacto</Link>
        </nav>
    )
}

export default Sidebar;

