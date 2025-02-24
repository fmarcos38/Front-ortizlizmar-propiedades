import React, { useState } from 'react'
import FiltroVentaAlq from '../FiltroVentaAlq';
import FiltroPrecio from '../FIltroRangoPrecio';
import './styles.css';

function Filtros({muestraVntaAlq, setOperacion, setTipoPropiedad, precioMin, precioMax, setPrecioMin, setPrecioMax, setCurrentPage}) {

    const arrayFiltros = [
        'Departamento', 'Casa', 'PH', 'Local', 
        'Oficina', 'Cochera', 'Terreno', 'Galpón',
    ];
    const [operacionLocal, setOperacioLocal] = useState(''); //estado para ver el tilde en los checkbox

    // Asegurarse de que `setOperacion` en Home sea invocado cada vez que cambia el checkbox
    const handleFilterChange = (event) => {
        const { value } = event.target;
        const nuevaOperacion = value === operacionLocal ? '' : value;
        setOperacioLocal(nuevaOperacion);
        setOperacion(nuevaOperacion);
    };
    // Actualizar `tipoPropiedad` en Home y `tipoP` en BarraLateral
    const handleClick = (e) => {
        const { id } = e.target;
        setTipoPropiedad(id);
    };

    return (
        <div className='cont-filtros'>
            <div className='titulo-filtros'>
                <h2>Personalizá tu búsqueda</h2>
            </div>
            {/* filtro Vnt / Alq */}
            <div className='cont-venta-alq'>
                <FiltroVentaAlq handleFilterChange={handleFilterChange}/>
            </div>

            <div className='cont-filtros'>
                <h3>Tipo de propiedad</h3>
                <div className='cont-filtros-map'>
                {
                    arrayFiltros.map((filtro, index) => (
                            <button
                                key={index}
                                id='{filtro}'
                                onClick={handleClick}
                                className='btn-filtro'
                            >
                                {filtro}
                            </button>
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