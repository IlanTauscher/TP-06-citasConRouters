import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import MisCitas from './MisCitas';
import NuevasReservas from './NuevasReservas';

function App() {
  const KEY_LOCAL_STORAGE = 'datosform'
  const [datos, setDatos] = useState( () => {
    const listaGuardada = localStorage.getItem(KEY_LOCAL_STORAGE)
    if(listaGuardada != null)
     return JSON.parse(listaGuardada)
    else
    return []
  }
  );

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(datos));
  }, [datos]);

  return (
    <div className="container">
      <Navbar/>
      <div className="row">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/nuevas-reservas" element={<NuevasReservas datos={datos} setDatos={setDatos} />} />
          <Route path="/mis-citas" element={<MisCitas datos={datos} setDatos={setDatos} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App