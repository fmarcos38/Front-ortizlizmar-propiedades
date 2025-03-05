import React, { useContext } from 'react';
import FormularioCreaUsuario from '../../Components/FormularioCreaUsuario';
import './estilos.css'; 
import { InmobiliariaContext } from '../../Context';

function AltaUsuarioPage() {
    
    const context = useContext(InmobiliariaContext);

    return (
        <div className='cont-alta-usuario'>
            {
                context.isAuthenticated ? 
                <>
                    <h1>Alta de Usuario</h1>
                    <FormularioCreaUsuario />
                </>
                :
                <h1>Debes estar logeado para acceder a esta página</h1>
            }
        </div>
    )
}

export default AltaUsuarioPage;