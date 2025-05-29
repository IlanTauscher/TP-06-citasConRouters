import React from 'react';
import PerrosGatos from '../assets/PerrosGatos.jpg';
import '../Home.css'

export default function Home() {
  return (
    <div className='home'>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <p>¿A quien vamos a ingresar hoy?</p>
      <img src={PerrosGatos} alt="PerrosGatos" />
    </div>
  )
}