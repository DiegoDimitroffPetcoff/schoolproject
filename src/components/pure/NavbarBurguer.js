
import React, { useState } from 'react';
import Buttom from './Buttom';
import '../../styles/navbar/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarBurger = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      
 {isOpen     ?
 (<FontAwesomeIcon className='NavbarBurguer' icon={faBars} /> ) :


 (    
 <nav className='NavbarBurguer' >
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
</nav>)

}    
      

 
    </>
  );
};

export default NavbarBurger;

