import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from '../src/components/sidebar/Sidebar';
import Contacto from './pages/contacto/Contacto';
import Desierto from './pages/desierto/Desierto';
import Historia from './pages/historia/Historia';
import Planea from './pages/planea/Planea';
import Home from './pages/home/Home';
import Centro from './pages/centro/Centro';
import Naturaleza from './pages/naturaleza/Naturaleza';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Sidebar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/centro" element={<Centro />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/arte" element={<Desierto />}/>
            <Route path="/historia" element={<Historia />}/>
            <Route path="/planea" element={<Planea />}/>
            <Route path="/naturaleza" element={<Naturaleza />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
