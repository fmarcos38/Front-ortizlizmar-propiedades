import React from 'react';
import Card from '../Card';
import NoHayProps from '../NoHayProps';
import './styles.css';

function ListaPropiedades({ allProps }) {

    /* lógica para mostrar primero las destacadas */
    const propsDestacadas = allProps.filter(p => p.destacadaEnWeb === true);
    const propsNoDestacadas = allProps.filter(p => p.destacadaEnWeb === false);

    return (
        <div className='contGralListaP'>
            <div className='contListaP'>
                {
                    (propsDestacadas?.length > 0 || propsNoDestacadas?.length > 0) ? (
                        <>
                            {
                                propsDestacadas?.map(p => (
                                    <div className='cont-card' key={p.id}>
                                        <Card
                                            className='card'
                                            id={p.id}
                                            direccionF={p.direccionF}
                                            operacion={p.operacion}
                                            imagenes={p.imagenes}
                                            tituloPublicacion={p.tituloPublicacion}
                                            ambientes={p.ambientes}
                                            dormitorios={p.dormitorios}
                                            unidadMedida={p.unidadMedida}
                                            cantCocheras={p.cantCocheras}
                                            supTotal={p.supTotal}
                                            tipo={p.tipo}
                                        />
                                    </div>
                                ))
                            }
                            {
                                propsNoDestacadas?.map(p => (
                                    <div className='cont-card' key={p.id}>
                                        <Card
                                            className='card'
                                            id={p.id}
                                            direccionF={p.direccionF}
                                            operacion={p.operacion}
                                            imagenes={p.imagenes}
                                            tituloPublicacion={p.tituloPublicacion}
                                            ambientes={p.ambientes}
                                            dormitorios={p.dormitorios}
                                            unidadMedida={p.unidadMedida}
                                            cantCocheras={p.cantCocheras}
                                            supTotal={p.supTotal}
                                            tipo={p.tipo}
                                        />
                                    </div>
                                ))
                            }
                        </>
                    ) : (
                        <div className='no-props'>
                            <NoHayProps />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ListaPropiedades