import React from 'react';
import './planea.css'

const Planea = () => {
    return(
        <div>
            <div className='main-planea'>
                <h1 className='main-centro'>Centro de Interpretación</h1>
                <hr className='main-separator'/>
                <div className='main-horarios'>
                    <h1>Horarios</h1>
                    <div className='horarios'>
                    <div className='horarios-part'>
                        <h3>Horario de Invierno</h3>
                        <hr/>
                        <p>Del 16 de septiembre al 14 de junio:</p>
                        <p>De martes a sábado de 10:00 a 14:00 h y de 16:00 a 19:00 h.</p>
                        <p>Domingos de 10:00 a 14:00 h.</p>    
                    </div>

                    <div className='horarios-part'>
                        <h3>Horario de verano</h3>
                        <hr/>
                        <p>Del 15 de junio al 15 de septiembre</p>
                        <p>De martes a domingo de 10:00 a 14:00 h.</p>
                    </div>

                    <div className='horarios-part'>
                        <h3>Dias de cierre</h3>
                        <hr/>
                        <p>Todos los lunes</p>
                        <p>1 y 6 de enero, Viernes Santo, 1 de mayo.</p>
                        <p>15 y 16 de agosto y 24, 25 y 31 de diciembre.</p>    
                    </div>
                    </div>
                </div>

                <div className='main-horarios-verano'>
                    <h1>Turnos de visitas guiadas</h1>
                    <div className='visitas-guiadas-main'>
                    <div className='visitas-guiadas'>
                        <h3>Horario disponibles</h3>
                        <hr/>
                        <ul className='listado'>
                            <li>10:00</li>
                            <li>11:00</li>
                            <li>12:00</li>
                            <li>13:00</li>
                        </ul>
                    </div>

                    <div className='visitas-text'>
                        <h2>Limite diario de 45 personas (15 por turno)</h2>
                    </div>
                    </div>
                </div>
            </div>

            <div className='main-planea'>
                <h1 className='main-centro'>Desierto de Bolarque</h1>
                <hr className='main-separator'/>
                <div className='warning-desierto'>
                     <h1>AVISO IMPORTANTE</h1>
                    <p >Antes de la visita al Desierto de Bolarque se debe acudir al Centro de interpretación del Desierto de Bolarque, ubicado en Sayatón, donde se ofrecen visitas guiadas cada hora, como complemento y para entender mejor el contenido del Desierto de Bolarque, antes de su visita. La visita al desierto se iniciará con un viaje en todoterreno de unos dos km hasta el inicio de la ruta. Una vez allí, se iniciará una ruta de unos dos km andando hasta el Desierto de Bolarque. La visita tendrá una duración de unas tres horas.</p>
                </div>
                <div className='main-horarios'>
                    <h1>Horarios</h1>
                    <div className='horarios'>

                    <div>
                        <h3>Horario de Verano</h3>
                        <hr/>
                        <p>Del 15 de junio al 15 de septiembre.</p>
                        <p>De martes a domingo dos pases a las 10:00 y las 13:00 horas.</p>
                    </div>

                    <div>
                        <h3>Dias de cierre</h3>
                        <hr/>
                        <p>Todos los lunes.</p>
                        <p>15 y 16 de agosto.</p>
                    </div>
                    </div>
                </div>
                <hr className='main-separator'/>
                <div className='main-normas'>
                    <h2>Normas de acceso al Desierto de Bolarque</h2>
                    <ul className='listado'>
                        <li>Deben seguirse rigurosamente las normas e indicaciones del/de la guarda-guía.</li>
                        <li>En caso de incumplimiento o no hallarse en condiciones físicas para el acceso, la guarda-guía está acreditada para anular la visita.
                        No está permitida la entrada a menores de 7 años</li>
                        <li>Se advierte que para acceder al Desierto de Bolarque es necesario calzado adecuado y ropa deportiva, ya que es necesario adentrarse en la naturaleza, subir y bajar un paso estrecho y terreno resbaladizo.</li>
                    </ul>
                </div>

                <div className='main-normas'>
                    <h2>En el desierto de Bolarque</h2>
                    <ul className='listado'>
                        <li>No tocar nada.</li>
                        <li>No sacar  fotos, videos o grabaciones.</li>
                        <li>No usar el móvil, linternas o punteros láser.</li>
                    </ul>
                </div>

                <div className='main-normas'>
                    <h2>No se puede acceder</h2>
                    <p>Con comida, bebida, animales, plantas, mochilas, bolsos, palos, bastones, muletas, chanclas, sandalias, zapatos de tacón, etc</p>
                </div>


            </div>

            <div className='main-planea'>
                    <hr className='main-separator'/>
                    <h1 className='main-entrada-texto'>Entradas</h1>
                    
                    <div className='entradas'>
                        <p>Las entrada es gratuita y se obtendrá en taquilla.</p>
                        <p>Las visitas de grupos se realizarán siempre mediante reserva previa vía teléfono (949 38 94 07) o correo electrónico (desiertodebolarque@gmail.com)</p>
                    </div>
                </div>
        </div>
    )
}

export default Planea;