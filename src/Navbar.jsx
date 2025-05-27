import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <li className='Nav'>
            <ul>
                <NavLink to= "/" className="link">Home</NavLink>
            </ul>
            <ul>
                <NavLink to= "/Ingresar" className="link">Ingresar</NavLink>
            </ul>
            <ul>
                <NavLink to= "/Pacientes" className="link">Pacientes</NavLink>
            </ul>
        </li>
    </div>  
  )
}
