import React, { useState } from "react";
import Buttom from "./Buttom";
import Buttom2 from "./Buttom2";
import "../../styles/navbar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarBurguer = () => {
  const [isOpen, setIsOpen] = useState(true);

  function openBar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen ? (
        <button onClick={openBar} className="NavbarBurguerIcon">
          {" "}
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#f2ced8" }}
            className="fa-4x"
          />{" "}
        </button>
      ) : (
        <nav className="NavbarBurguer">
        
          <ul>
          <Buttom2 string="X" action={()=>{setIsOpen(!isOpen);}}></Buttom2>
            <li>
              <Buttom string="INICIO"></Buttom>
            </li>
            <li>
              <Buttom string="INGRESAR"></Buttom>
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
              <Buttom string="DISEÑOS"></Buttom>
            </li>
            <li>
              <Buttom string="ESCUELA"></Buttom>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavbarBurguer;
