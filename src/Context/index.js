import React, { useState } from 'react';
import { createContext } from 'react';

//creo el contexto
export const InmobiliariaContext = createContext();

//creo el provider
export const InmobiliariaProvider = ({ children }) => {

    //estado para idioma
    const [idioma, setIdioma] = useState('es');


    return (
        <InmobiliariaContext.Provider value={{
            idioma,
            setIdioma
        }}>
            {children}
        </InmobiliariaContext.Provider>
    )
}