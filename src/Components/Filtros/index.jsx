import React from 'react'
import FiltroVentaAlq from '../FiltroVentaAlq';
import FiltroPrecio from '../FIltroRangoPrecio';
import './styles.css';

function Filtros({muestraVntaAlq, precioMin, precioMax, setPrecioMin, setPrecioMax, setCurrentPage}) {

    const arrayFiltros = [
        'Departamento', 'Casa', 'PH', 'Local', 
        'Oficina', 'Cochera', 'Terreno', 'Galpón',
    ];

    return (
        <div className='cont-filtros'>
            <div className='titulo-filtros'>
                <h2>Personalizá tu búsqueda</h2>
            </div>
            {/* filtro Vnt / Alq */}
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

            {/* filtro rango precio */}
            <div className='cont-filtro-rangoPrecio'>
                <FiltroPrecio 
                    precioMin={precioMin} 
                    precioMax={precioMax}
                    setPrecioMin={setPrecioMin}
                    setPrecioMax={setPrecioMax}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default Filtros