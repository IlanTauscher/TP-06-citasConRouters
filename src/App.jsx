import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/Home';
import MisCitas from './Pages/MisCitas';
import NuevasReservas from './Pages/NuevasReservas';

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
          <Route path="/NuevasReservas" element={<NuevasReservas datos={datos} setDatos={setDatos} />} />
          <Route path="/MisCitas" element={<MisCitas datos={datos} setDatos={setDatos} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App