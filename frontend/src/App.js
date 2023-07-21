
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Card from './components/card';
import DetallesProducto from './pages/vistaproducto';
import Carrito from './pages/carrito';
import AcercaDe from './pages/acerca';
import Register from './pages/register';
import Inicio_cesion from './pages/cesion';
import Perfil from './pages/perfil';
import Catalogo from './pages/catalogo';

function App() {
  return (

    <Routes>
      
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/card' element={<Card/>}></Route>
      <Route path='/catalogo' element={<Catalogo/>}></Route>
      <Route path='/vistaproducto' element={<DetallesProducto/>}></Route> 
      <Route path='/carrito' element={<Carrito/>}></Route>
      <Route path='/acercade'element={<AcercaDe/>}></Route>
      <Route path='/registro' element={<Register/>}></Route>
      <Route path='/login' element={<Inicio_cesion/>}></Route>
      <Route path='/perfil' element={<Perfil/>}></Route>
      <Route path='/*'errorElement={"Pagina no encontrada"}></Route>
    </Routes>

  );
}

export default App;
