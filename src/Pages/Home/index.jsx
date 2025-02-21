import React from 'react';
import LandingA from '../../Components/LandingA';
import LandingB from '../../Components/LandingB';
import LandingC from '../../Components/LandingC';
import LandingMuestraTarjetas from '../../Components/LandingMuestraTarjetas';
import './styles.css';
import Filtros from '../../Components/Filtros';


function Home() {



    return (
        <div className='cont-home page'>
            <LandingA />
            <LandingB />
            <LandingC />
            <LandingMuestraTarjetas />

            <div className='cont-titulo-filtros-listaProps'>
                <h1 className='titulo-busqueda'>Busqueda de propiedades</h1>
                <div className='cont-filtros-props'>
                    <div className='cont-filtros-home'>
                        <Filtros muestraVntaAlq='true' />
                    </div>
                    <div className='cont-listaProps-home'>
                        listaProps
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home