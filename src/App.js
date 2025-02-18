import { InmobiliariaProvider } from './Context';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
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
          </Routes>
        </main>

        <footer>

        </footer>
        
      </div>
    </InmobiliariaProvider>
  );
}

export default App;
