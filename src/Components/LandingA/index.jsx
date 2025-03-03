import React from 'react'
import CarruselLnding from '../CarruselLanding'
import './styles.css'

function LandigA() {
    return (
        <div className='cont-landing-A'>
            <div className='cont-carruselLanding'>
                <CarruselLnding />
            </div>
            <div className='cont-textosLanding'>
                <div className='cont-textoLanding-h1'>
                    <h1 className='tituloLanding'>
                        Nuestros 50 años de experiencia nos respaldan...
                    </h1>
                    <p className='textoLanding-p'>
                        Encontrá la propiedad que estás buscando, en el lugar que siempre soñaste.
                    </p>
                    <p className='texto-inf-landing'>
                    Trabajamos propiedades exclusivas...
                </p>
                </div>
            </div>
            {/* flecha que señala hacia abajo compuesta por dos palitos blancos con movimiento hacia arriba y abjo */}
            <div className='cont-flecha'>
                <div className='flecha'>
                    <div className='linea linea1'></div>
                    <div className='linea linea2'></div>
                </div>
            </div>
        </div>
    )
}

export default LandigA