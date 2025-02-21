import React from 'react'
import FiltroVentaAlq from '../FiltroVentaAlq';
import './styles.css';

function Filtros({muestraVntaAlq}) {

    const arrayFiltros = [
        'Departamento', 'Casa', 'PH', 'Local', 'Oficina', 
        'Cochera', 'Terreno', 'Fondo de comercio', 'Galpón', 'Emprendimientos',
    ];

    return (
        <div className='cont-filtros'>
            <div className='titulo-filtros'>
                <h2>Personalizá tu búsqueda</h2>
            </div>

            <div className='cont-venta-alq'>
                <FiltroVentaAlq />
            </div>

            <div className='cont-filtros'>
                <h3>Tipo de propiedad</h3>
                <div className='cont-filtros-map'>
                {
                    arrayFiltros.map((filtro, index) => (
                            <button key={index} className='btn-filtro'>{filtro}</button>
                        )
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default Filtros