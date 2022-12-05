import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Contacto from './pages/contacto/Contacto';
import Desierto from './pages/desierto/Desierto';
import Historia from './pages/historia/Historia';
import Planea from './pages/planea/Planea';
import Home from './pages/home/Home';
import Centro from './pages/centro/Centro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/centro" element={<Centro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/desierto" element={<Desierto />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/planea" element={<Planea />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
