import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DatosGenerales from './pages/DatosGenerales';
import Secciones from './pages/Secciones';
import Productos from './pages/Productos';
import Subscripciones from './pages/Subscripciones';
import Mapa from './pages/Mapa';
import Reseñas from './pages/Reseñas';
import Settings from './pages/Settings';
import Payment from './pages/Payment';
import Accounts from './pages/Accounts';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datos-generales" element={<DatosGenerales />} />
        <Route path="/secciones" element={<Secciones />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/subscripciones" element={<Subscripciones />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/reseñas" element={<Reseñas />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
