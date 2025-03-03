import React, { createContext, useState } from 'react';

export const InmobiliariaContext = createContext();

const API_KEY = "AIzaSyBRL5HhMoPtnSqZ5VjFR6rbpMu0ZsRLTxc"; // Reemplázalo con tu API Key

const InmobiliariaProvider = ({ children }) => {
    const [idioma, setIdioma] = useState("es");
    
    // Función para traducir **toda la web**
    const traducirPagina = async (nuevoIdioma) => {
        try {
          setIdioma(nuevoIdioma);
      
          const elementos = document.querySelectorAll("[data-translate]");
          const textosOriginales = Array.from(elementos).map((el) => el.innerText);
      
          const response = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                q: textosOriginales,
                target: nuevoIdioma,
                format: "text", // Asegura que la API devuelva solo texto
              }),
            }
          );
      
          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
      
          const data = await response.json();
      
          if (!data.data || !data.data.translations) {
            throw new Error("Estructura de respuesta inesperada");
          }
      
          const traducciones = data.data.translations.map((t) => t.translatedText);
      
          // Aplicamos la traducción a cada elemento en la web
          elementos.forEach((el, index) => {
            el.innerText = traducciones[index];
          });
      
        } catch (error) {
          console.error("Error al traducir:", error);
        }
    };

    return (
        <InmobiliariaContext.Provider value={{ idioma, setIdioma, traducirPagina }}>
            {children}
        </InmobiliariaContext.Provider>
    );
};

export default InmobiliariaProvider;
