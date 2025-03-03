import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InmobiliariaProvider  from './Context';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import PropsVenta from './Pages/PropsVenta';
import PropsAlquiler from './Pages/PropsAlquiler';
import NosotrosPage from './Pages/Nosotros';
import DetalleProp from './Pages/DetallePropiedad';
import FavoritosPage from './Pages/Favoritos';
import WhatsAppButton from './Components/BotonWhastApp';
import Contactanos from './Pages/Contactanos';
import './App.css';


function App() {

  return (
    <InmobiliariaProvider>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>

        <main>          
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path='/venta' element={<PropsVenta/>} />
          <Route path='/alquiler' element={<PropsAlquiler />} />
          <Route path='/nosotros' element={<NosotrosPage/>} />
          <Route path='/contacto' element={<Contactanos/>} />
          <Route path='/detalle/:id' element={<DetalleProp/>} />
          <Route path='/favoritos' element={<FavoritosPage/>} />
          </Routes>
          {/* btn whatsapp */}
          <WhatsAppButton />
        </main>

        <footer>

        </footer>
        
      </div>
    </InmobiliariaProvider>
  );
}

export default App;
