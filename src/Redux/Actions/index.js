import axios from "axios";
import { LOGIN, RESET_LOGIN, GET_PROPERTY,  GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING, 
    RESET_PROPS, RESET_PROPERTY, GET_EMPRENDIMIENTOS, GET_EMPRENDIMIENTO,
    RESET_EMPRENDIMIENTO, 
} from "./actionsType";
import { actual } from "../../url";

//---usuarios-----------------------------------
//---LOGIN--------------------------------------------------------
export function login(data){ 
    return async function (dispatch) {
        const resp = await axios.post(`${actual}/auth/login`, data); 
        //asigno data del user al localStorage
        localStorage.setItem("userData", JSON.stringify(resp.data));
        dispatch({ type: LOGIN, payload: resp.data });        
    }
}
export function resetLogin(){
    return function(dispatch){
        dispatch({type: RESET_LOGIN, payload: null})
    }
}
//--usuario------------------------------------------------------
//crea usuario
export const creaUsuario = (data) => {
    return async function() {
        await axios.post(`${actual}/usuarios/crea`, data);
    }
};

//trae usuarios
export const getUsuarios = () => {
    return async function(dispatch) {
        const resp = await axios.get(`${actual}/usuarios`);
        dispatch({type: 'GET_USUARIOS', payload: resp.data});
    }
};

//trae usuario por ID
export const getUsuario = (_id) => {
    return async function(dispatch) { 
        const resp = await axios.get(`${actual}/usuarios/${_id}`);
        dispatch({type: 'GET_USUARIO', payload: resp.data});
    }
};

//edita usuario
export const editaUsuario = ({_id, data}) => {
    return async function() { 
        await axios.put(`${actual}/usuarios/edita/${_id}`, data);
    }
};

//elimina usuario
export const eliminaUsuario = (email) => {
    return async function() {
        await axios.delete(`${actual}/usuarios/elimina/`, email);
    }
};

//--actions para props-------------------------------------------------------------
//trae props
export const getProps = (limit, offset, operacion, tipoPropiedad, ambientes, precioMin, precioMax) => {
    return async function(dispatch) {
        dispatch({type: LOADING});

        try {
            //construimos los parametros dinamicamente
            let queryParams = `?limit=${limit}&offset=${offset}`;

            if(operacion) queryParams += `&operacion=${operacion}`;
            if(tipoPropiedad) queryParams += `&tipo=${tipoPropiedad}`;
            if(ambientes) queryParams += `&ambientes=${ambientes}`;
            if(precioMin) queryParams += `&precioMin=${precioMin}`;
            if(precioMax) queryParams += `&precioMax=${precioMax}`;

            const resp = await axios.get(`${actual}/propiedades${queryParams}`); 
            dispatch({ type: GET_PROPS, payload: resp.data });
        } catch (error) {
            console.log(error);
        }
    }
}

//trae prop por id
export const getProperty = (id) => {
    return async function(dispatch) {
        dispatch({type: LOADING});
        
        try {
            const resp = await axios.get(`${actual}/propiedades/${id}`);
            dispatch({type: GET_PROPERTY, payload: resp.data});
        } catch (error) {
            console.log(error);
        }
    }
};

//reset detalle
export const resetProperty = () => {
    return function(dispatch) {
        dispatch({ type: RESET_PROPERTY });
    }
};

//cierra Modal imagen prop
export const isOpenModalPicture = () => {
    return function(dispatch){
        dispatch({type: IS_OPEN_MODAL_PICTURE});
    }
};

//reset propiedades
export const resetPropiedades = () => {
    return function(dispatch){
        dispatch({type: RESET_PROPS});
    }
}

//elimina propiedad
export const eliminaProp = (_id) => {
    return async function() {
        await axios.delete(`${actual}/propiedades/eliminaProp/${_id}`);
    }
};

//edita propiedad
export const editaProp = (data) => {
    return async function() {
        await axios.put(`${actual}/propiedades/editaProp`, data);
    }
};

//--EMPRENDIMIENTOS------------------------------
//trae emprendimientos
export const getEmprendimientos = (tipo) => {
    return async function(dispatch) {
        dispatch({type: LOADING});

        try {
            const resp = await axios.get(`${actual}/emprendimientos`); 
            dispatch({type: GET_EMPRENDIMIENTOS, payload: resp.data});
        } catch (error) {
            console.log(error);
        }
    }
}

//trae emprendimiento por ID
export const getEmprendimiento = (id) => { 
    return async function(dispatch) {
        dispatch({type: LOADING});
        const resp = await axios.get(`${actual}/emprendimientos/${id}`);
        dispatch({type: GET_EMPRENDIMIENTO, payload: resp.data});
    }
}

//reset emprendimientos
export const resetEmprendimientos = () => {
    return function(dispatch){
        dispatch({type: RESET_EMPRENDIMIENTO});
    }
}