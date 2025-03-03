import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmprendimientos } from '../../Redux/Actions';
import WhatsAppButton from '../../components/BotonWhastApp';
import Loading from '../../components/Loading';
import ListaEmprendimientos from '../../components/ListaEmprendimientos';
import './styles.css';


function Emprendimiento() {

    const loading = useSelector(state => state.loading);  
    const allEmp = useSelector(state => state.emprendimientos); 
    const dispatch = useDispatch();

    //efecto para iniciar la Pag desd la parte SUPERIOR
    useEffect(() => {
        // Desplaza la página hacia la parte superior cuando el componente se monta
        window.scrollTo(0, 0);
    }, []); // El array vacío asegura que se ejecute solo al montar el componente
    
    useEffect(()=>{
        dispatch(getEmprendimientos());
    },[dispatch]);

    return (
        <div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div className='cont-Venta cont-emp-page'>
                        <div className='cont-titulo-y-props-venta'>
                            <div className='cont-titulo-venta'>
                                <p className='titulo-props-emprendimientos'>Emprendimientos y oportunidades de negocios</p>
                            </div>
                            <div className='cont-barraLateral-Y-listaProps-venta'>
                                <ListaEmprendimientos allEmp={allEmp} />
                            </div>
                        </div>
                        <WhatsAppButton />
                    </div>
                )
            }
        </div>
    )
}

export default Emprendimiento;