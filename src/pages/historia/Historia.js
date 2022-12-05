import React from 'react';

import historia1 from './../../img/historia1.jpg'
import historia2 from './../../img/historia2.jpg'
import historia3 from './../../img/historia3.jpg'
import historia4 from './../../img/historia4.jpg'

const Historia = () => {
    return (
    <div>
        <div className='main-arte-1'>
        <h1>Historia</h1>
        <div className='main-arte'>
        <h3>
        Tras su fundación y durante tres siglos, el Desierto de Bolarque se fue desarrollando. Para esto, fue crucial la protección real promulgada por Felipe II en 1598. Tras esto y en los próximos tres siglos, multitud de familias nobles en busca del favor real, patrocinaron la construcción de capillas y compra de obras de arte para el conjunto carmelita. El Desierto de Bolarque llego a congregar una comunidad de 60 frailes, repartidos en más de 25 capillas.
        </h3>
        <h3>La Desamortización liberal puesta en práctica por el Ministro de Hacienda Mendizábal, supuso la desaparición de Bolarque al ser decretada, primero (octubre de 1835) la supresión de la Ordenes monásticas; luego (febrero de 1836) la exclaustración de sus habitantes, y en 1843 se puso a la venta en estado ruinoso y que deberá demolerse, siendo adquirido en ese momento por el vecino de Madrid don Juan Ortiz de Zárate. El edificio fue tasado en 12.535 reales.</h3>
        <h3>
        En ese momento, la Orden del Carmelo dispuso que muchos de los elementos muebles del Desierto de Bolarque pasaran a la iglesia Colegiata de Pastrana, ya que el Convento carmelita de San Pedro, en esta villa alcarreña, también fue sometido a Desamortización y exclaustrados sus miembros. De esa manera, muchas de sus piezas artísticas se conservan hoy en la Colegiata y Museo de Pastrana. Algunos altares, tallas como la Divina Pastora, y pinturas como el retrato de doña María Gasca de la Vega y la Dolorosa, vinieron de aquí, como los enterramientos de Francisco de Contreras y su esposa María Gasca, más muchas de las reliquias que hoy se conservan en este templo. 
        </h3>

      
    </div>

    <div className='main-arte-3'>
        <img src={historia1} alt="" class=""></img>
        <img src={historia2} alt="" class=""></img>
        <img src={historia3} alt="" class=""></img>
        <img src={historia4} alt="" class=""></img>
    </div>
    </div>
    </div>)
}

export default Historia;