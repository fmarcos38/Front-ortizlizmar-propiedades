import React from 'react'
import './styles.css'

function CardLanding({imagen, titulo}) {
  return (
    <div className='cont-tarjeta'>
        <div className='cont-img-tarjeta'>
            <img className='img-tarjeta' src={imagen} alt='Imagen de la propiedad'/>
        </div>
        <div className='cont-titulo-tarjeta'>
            <h2 className='titulo-tarjeta'>{titulo}</h2>
        </div>
        <div className='cont-btn'>
            <button className='btn-comprar'>Ingresar</button>
        </div>
    </div>
  )
}

export default CardLanding