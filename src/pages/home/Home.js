import React from 'react'
import './home.css'

import image from '../../img/fondo-1.jpg'


const Home = () => {
    return (
    <div className='home-page'>
        <div className='left-part'>
            <div>
            <h1>¡Bienvenido al Desierto de bolarque!</h1>
            <p className='left-part-text'>Un paraje y conjunto monasterial en ruinas situado cerca de Sayatón</p>
            </div>
        </div>
        <div className='rigth-part'>
            <img src={image} alt="" class="home-image"></img>
        </div>
    </div>)
}

export default Home;