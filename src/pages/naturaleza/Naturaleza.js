import React from 'react';

import natu1 from '../../img/naturaleza/natu1.jpg'
import natu2 from '../../img/naturaleza/natu2.jpg'
import natu3 from '../../img/naturaleza/natu3.jpg'
import natu4 from '../../img/naturaleza/natu4.jpg'
import natu5 from '../../img/naturaleza/natu5.jpg'
import natu6 from '../../img/naturaleza/natu6.jpg'

const Naturaleza = () => {
    return (<div>
        <div className='main-arte-1'>
        <h1>Situacion y naturaleza</h1>
        <div className='main-arte'>
        <h3>
        Este desierto Carmelitano se encuentra ubicado en un lugar casi paradisiaco, muy hermoso paisajísticamente y todavía hoy de muy difícil acceso. El desierto se encuentra ubicado en el término municipal de Pastrana pero más cerca de Sayatón (Guadalajara). Junto a la orilla del Tajo se sitúa este antiguo conjunto eremita. En esta zona, la sierras son abruptas en exceso, con laderas muy empinadas cubiertas de pinares densos, casi impracticables. Nunca nadie se estableció en aquel lugar, con la sola excepción del hermoso castillo de Anguix, situado en lo más alto de esta sierra. Poco más abajo del desierto, se juntan los ríos Guadiela y Tajo.
        </h3>
        <h3>
        En la actualidad, la riqueza faunística de Bolarque apenas ha menguado desde su fundación en el siglo XVI. Muy posiblemente no falte ninguna de las especies de animales y plantas que hace cuatro siglos existían en Bolarque.
        </h3>
        <h3>Por el cielo, se pueden observar águilas reales, los buitres, los quebrantahuesos, las perdices – muy abundantes -, las palomas que anidan en los pinos, las tórtolas, las torcaces, y muchas urracas.</h3>
        <h3>En la noche, se pueden aprecias aves nocturnas como los búhos, los carabos, los autillos, y los mochuelos. Además, existen ruisres, mirlos, jilgueros, caldelerillos, golondrinas y rendajos.</h3>
        <h3>En la tierra, existen corzos, venados y jabalíes. Los lobos son escasos, pero las zorras muy abundantes, las cuales acudían por la noche hasta las ermitas atraídas por los despojos de la fruta que arrojaban los ermitaños. Además, hay conejos, gatos monteses, garduños y ardillas por los pinos. </h3>
        <h3>Muy raras son las víboras, aunque muchas culebras y lagartos, y algunos alacranes.</h3>
        <h3>En cuanto a flora, la variedad de árboles, arbustos, plantas aromáticas y hierbas medicinales es muy grande. Es abundante el romero, el tomillo, la ajedrea y la mejorana. También el espliego, salvia, ruda, poleo y, cerca del río, la cincovena. Entre las medicinales, la yerba ibia, el pericón, la doradilla, la yerva brenca (o culantillo de pozo), corzonera, la escabiosa, la pimpinela, la potentila, el hiso-pillo y la bursapastoris, muy activa frente a las hemorragias.</h3>
        </div>
      
    </div>

    <div className='main-arte-3'>
        <img src={natu1} alt="" class="home-image"></img>
        <img src={natu2} alt="" class="home-image"></img>
        <img src={natu3} alt="" class="home-image"></img>
        <img src={natu4} alt="" class="home-image"></img>
        <img src={natu5} alt="" class="home-image"></img>
        <img src={natu6} alt="" class="home-image"></img>
    </div>
    </div>)
}

export default Naturaleza;