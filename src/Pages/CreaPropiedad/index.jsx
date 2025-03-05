import React, { useContext } from 'react';
import { actual } from '../../url';
import { InmobiliariaContext } from '../../Context';
import FormularioProp from '../../Components/FormularioPropiedad';
import Swal from 'sweetalert2';
import './estilos.css';

function CreaPropiedad() {

    const context = useContext(InmobiliariaContext);

    const handleOnSubmit = async(data) => {

        const formData = new FormData();
        formData.append('data', JSON.stringify({
            tituloPublicacion: data.tituloPublicacion,
            tipoPropiedad: data.tipoPropiedad,
            operacion: data.operacion,
            moneda: data.moneda,
            precio: data.precio,
            descripcion: data.descripcion,
            ubicacion: data.ubicacion,
            cantPisos: data.cantPisos,
            ambientes: data.ambientes,
            dormitorios: data.dormitorios,
            baños: data.baños,
            supCubierta: data.supCubierta,
            supSemiCub: data.supSemiCub,
            supDescubierta: data.supDescubierta,
            supTotal: data.supTotal,
            estado: data.estado,
            antiguedad: data.antiguedad,
            cantCocheras: data.cantCocheras,
            expensas: data.expensas,
            servicios: data.servicios,
            imagenes: data.imagenes,
            video: data.video,
        }));

        data.imagenes?.forEach((imagen, index) => {
            formData.append('imagenes', imagen);
        });

        try {
            const response = await fetch(`${actual}/propiedades`, {
                method: 'POST',
                body: formData,
            });
            if(response.ok){
                Swal.fire({
                    title: 'Propiedad creada con éxito',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3f51b5',
                });
                //redirijo a la lista de propiedades
                window.location.href = '/admin/listaPropsAdmin';
            }else{
                Swal.fire({
                    title: 'Error al crear la propiedad',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3f51b5',
                });
            }           
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="contenedor-crea-prop">
            {
            context.isAuthenticated ? (                
                    <FormularioProp handleOnSubmit={handleOnSubmit} op='creacion'/>
            ) : (
                <h1>No tienes permisos para acceder a esta página</h1>
            )
        }
        </div>
    )
}

export default CreaPropiedad;