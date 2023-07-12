import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/ingresar">Ingresar</Link>
        </li>
        <li>
          <Link to="/registrate">Regístrate</Link>
        </li>
        <li>
          <Link to="/quienes-somos">Quiénes somos</Link>
        </li>
        <li>
          <Link to="/agenda-tu-cita">Agenda tu cita</Link>
        </li>
        <li>
          <Link to="/disenos">Diseños</Link>
        </li>
        <li>
          <Link to="/escuela">Escuela</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
