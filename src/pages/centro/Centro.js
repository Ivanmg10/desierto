import React from 'react';

import centro from './../../img/centro.jpg'

const Centro = () => {
    return (<div>
        <div className='main-arte-1'>
        <h1>Centro de interpretación</h1>
        <div className='main-arte'>
        <h3>
        El Centro de interpretación del Desierto de Bolarque se ha realizado por las siguientes razones:
        </h3>
        <ul>
            <li>Situación: se encuentra ubicado en un lugar de muy difícil acceso, no siendo recomendable su visita en los meses fríos.</li>
            <li>Propiedad: el Desierto de Bolarque se encuentra ubicado en el interior de una finca privada propiedad del Duque de Pastrana, lo cual limita su visita.</li>
            <li>Conservación: el Desierto de Bolarque se encuentra en estado ruinoso y en un entorno natural virgen. Para la correcta conservación, tanto del desierto como del espacio natural, es necesario limitar las visitas.</li>
            <li>Conservación de los restos arqueológicos: durante el proceso de restauración del desierto, se hallarán restos arqueológicos, los cuales necesitan un sitio en los que se conservados en las condiciones óptimas.</li>
        </ul>
        <h3>
        El centro de interpretación se encuentra ubicado en Sayatón, en la plaza de San Roque, corazón de esta localidad. Esta es la población más cercana al antiguo conjunto eremita y la única villa con la que los monjes tenían contacto cuando el monumento estaba habitado.
        </h3>
        <h3>Por el cielo, se pueden observar águilas reales, los buitres, los quebrantahuesos, las perdices – muy abundantes -, las palomas que anidan en los pinos, las tórtolas, las torcaces, y muchas urracas.</h3>
        <h3>El centro de interpretación cuenta con un fin divulgativo, custodiando los restos arqueológicos que se encontraron durante la intervención en el desierto. Este fue construido exnovo y cuenta con tres salas. La primera de ellas, la más pequeña de ellas, es la recepción y el punto de encuentro de las visitas guiadas. Este es el lugar donde los visitantes adquieren su ticket. La segunda sala, es un espacio expositivo en el que a través de fotografías y los restos arqueológicos encontrados, los visitantes podéis conocer la naturaleza, la historia y el arte del antiguo Desierto de Bolarque. Esta sala es en las que se desarrolla la visita guiada. La última sala, es un pequeño salón de actos en él que se realizan todo tipo de actividades relacionadas con este antiguo conjunto eremita. Seminarios, congresos, presentaciones de libros, son algunas de las muchas actividades que se llevan a cabo.</h3>
        </div>
      
    </div>

    <div className='main-arte-4'>
        <img src={centro} alt="" class=""></img>
    </div>
    </div>)
}

export default Centro;