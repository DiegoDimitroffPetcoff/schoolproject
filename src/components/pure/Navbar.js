import React from 'react';
import Buttom from './Buttom';
import '../../styles/navbar/navbar.css';


const Navbar = () => {
  return (
    <nav className='Navbar1'>
      <ul>
        <li >
   <Buttom string="INICIO"></Buttom>
        </li>
        <li>
        <Buttom string="INICIO"></Buttom>
        </li>
        <li>
        <Buttom string="REGISTRARTE"></Buttom>
        </li>
        <li>
        <Buttom string="QUIENES SOMOS"></Buttom>
        </li>
        <li>
        <Buttom string="AGENDA TU CITA"></Buttom>
        </li>
        <li>
        <Buttom string="INICIO"></Buttom>
        </li>
        <li>
        <Buttom string="INICIO"></Buttom>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
