import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InmobiliariaProvider  from './Context';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import Navbar from './Components/Navbar';
import PropsVenta from './Pages/PropsVenta';
import PropsAlquiler from './Pages/PropsAlquiler';
import Emprendimientos from './Pages/Emprendimientos';
import NosotrosPage from './Pages/Nosotros';
import DetalleProp from './Pages/DetallePropiedad';
import FavoritosPage from './Pages/Favoritos';
import WhatsAppButton from './Components/BotonWhastApp';
import Contactanos from './Pages/Contactanos';
import CreaPropiedad from './Pages/CreaPropiedad';
import ListaPropsAdminPage from './Pages/ListaProspAdminPage';
import EditaPropiedad from './Pages/EditaPropiedad';
import AltaUsuarioPage from './Pages/AltaUsuario';
import ListaUsuariosPage from './Pages/ListaUsuariosPage';
import EditaUsuarioPage from './Pages/EditaUsuario';
import Footbar from './Components/Footbar';
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
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/ventas' element={<PropsVenta />} />
            <Route path='/alquiler' element={<PropsAlquiler />} />
            <Route path='/emprendimientos' element={<Emprendimientos />} />
            <Route path='/nosotros' element={<NosotrosPage />} />
            <Route path='/contacto' element={<Contactanos />} />
            <Route path='/detalle/:id' element={<DetalleProp />} />
            <Route path='/favoritos' element={<FavoritosPage />} />
            {/* rutas para Admin */}
            <Route path='/admin/creaPropiedad' element={<CreaPropiedad />} />
            <Route path='/admin/listaPropsAdmin' element={<ListaPropsAdminPage />} />
            <Route path='admin/editaProp/:_id' element={<EditaPropiedad />} />
            <Route path='/admin/creaUsuario' element={<AltaUsuarioPage />} />
            <Route path='/admin/listaUsuarios' element={<ListaUsuariosPage />} />
            <Route path='/admin/editaUsuario/:_id' element={<EditaUsuarioPage />} />

            <Route path='*' element={<Home />} />
          </Routes>
          {/* btn whatsapp */}
          <WhatsAppButton />
        </main>

        <footer>
          <Footbar />
        </footer>
        
      </div>
    </InmobiliariaProvider>
  );
}

export default App;
