
import React, { useState } from 'react';
import Buttom from './Buttom';
import '../../styles/navbar/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarBurger = () => {
  const [isOpen, setIsOpen] = useState(true);

  function openBar() {
    setIsOpen( !isOpen) 
  }
  return (
    <>
      
 {isOpen     ?
 (<button onClick={openBar} className='NavbarBurguerIcon'>   <FontAwesomeIcon icon={faBars} style={{ color: '#f2ced8' }} className="fa-4x" /> </button>) :


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

