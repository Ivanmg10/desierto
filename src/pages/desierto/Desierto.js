import React from 'react';
import './desierto.css'

import arte1 from './../../img/arte-1.jpg';
import arte2 from './../../img/arte-2.jpg';

const Desierto = () => {
    return (
        <div>
            <div className='main-arte-1'>
            <h1>Arte</h1>
            <div className='main-arte'>
            <h3>
            Sumado a la arquitectura, destacan las urnas mortuorias de don Francisco de Contreras y doña María Gasca de la Vega, en pórfido negro sobre plintos de mármol labrados, y sobre ellos, retratos de los fallecidos, obra del flamenco Diricksen. Tanto las urnas, los plintos con sus escudos, y el retrato de doña María junto a la Virgen Dolorosa, están hoy en la Colegiata de Pastrana, en la capilla de las reliquias donde también fueron llevadas gran número de las que había en Bolarque.
            </h3>

            <h3>
            Había además en este Desierto una buena copia de cuadros al óleo, de muy buena mano según nos dice Fray Diego, pero sin poder concretar en ningún caso su autor. Se trataba de cuadros devocionales con temas teresianos, carmelitanos, etc. Además, se conservan algunas tallas, en especial el magnífico grupo de la Divina Pastora que, en una fina ejecución de lo mejor de la escuela barroca castellana, representa a la Virgen en hábito del Carmen cuidando de unas ovejas muy realistas. Se conserva en el Museo de la Colegiata de Pastrana. El resto ha desaparecido.
            </h3>
            </div>
          
        </div>

        <div className='main-arte-2'>
            <img src={arte1} alt="" class="home-image"></img>
            <img src={arte2} alt="" class="home-image"></img>
        </div>
        </div>
    )
}

export default Desierto;