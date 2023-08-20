import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/navbar/navbar.css";

import Buttom from "./Buttom";
import Buttom2 from "./Buttom2";

import AuthContext from "../../contexts/authContext";

import Cookies from "js-cookie";

const Navbar = () => {
  const{logged, setLogged}=useContext(AuthContext)
function logOut(params) {
  setLogged(!logged)
  Cookies.remove("userData");
}


  return (
    <ul>
      <li>
        <Link to="/">
          <Buttom string="INICIO"></Buttom>
        </Link>
      </li>
      <li>
      <Link to="/whoweare">
        <Buttom  string="QUIENES SOMOS"></Buttom> </Link>
      </li>
      <li>
        <Buttom string="AGENDA TU CITA"></Buttom>
      </li>
      <li>
        <Buttom string="DISEÑOS"></Buttom>
      </li>      
      <li>
      <Link to="/Design">
        <Buttom string="TALLERES"></Buttom></Link>
      </li>
      {!logged ?    ( <><li>
        <Link to="/login">
          <Buttom string="INGRESAR"></Buttom>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <Buttom2 string="REGISTRARTE"></Buttom2>
        </Link>
      </li></>) :       <li>
        <Link to="/">
          <Buttom2 
          string="LOG OUT" 
          onClick={logOut}></Buttom2>
        </Link>
      </li> }
    </ul>
  );
};

export default Navbar;
