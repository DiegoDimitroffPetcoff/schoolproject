import React from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar/navbar.css";

import Buttom from "./Buttom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          <Buttom string="INICIO"></Buttom>
        </Link>
      </li>
      <li>
        <Link to="/login">
          <Buttom string="INGRESAR"></Buttom>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <Buttom string="REGISTRARTE"></Buttom>
        </Link>
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
  );
};

export default Navbar;
