import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='Nav'>
            <ul>
                <NavLink to= "/" className="link">Home</NavLink>
            </ul>
            <ul>
                <NavLink to= "/NuevasReservas" className="link">Ingresar</NavLink>
            </ul>
            <ul>
                <NavLink to= "/MisCitas" className="link">Pacientes</NavLink>
            </ul>
    </div>  
  )
}
