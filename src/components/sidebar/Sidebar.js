import React from 'react';
import './sidebar.css'

const Sidebar = () => {
    return (
        <nav id="main-nav" class="sidebar">
            <a href="/historia" onclick="route()">Historia</a>
            <a href="/centro" onclick="route()">Centro de Interpretación</a>
            <a href="/naturaleza" onclick="route()">Naturaleza</a>
            <img src="./images/logo.png" alt="" class="logo" />
            <a href="/desierto" onclick="route()">Desierto de bolarque</a>
            <a href="/planea" onclick="route()">Planea tu visita</a>
            <a href="/historia" onclick="route()">Contacto</a>
        </nav>
    )
}

export default Sidebar;

