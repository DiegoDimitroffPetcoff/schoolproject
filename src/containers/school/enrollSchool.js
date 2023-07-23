import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";

import { FaBook, FaSchool } from 'react-icons/fa';

import "../../styles/sectionOne.css";
import "../../styles/whoWeAre.css";
import "../../styles/dashboard.css"

import authContext from "../../contexts/authContext";


function EnrollSchool() {


  const {adm, setAdm, logged, setLogged} = useContext(authContext)

  return (
    <div className="DashboardContainer">
      <div className="DashboardBox">
      <h1 className="DashboardTitle2">INSCRIBETE EN NUESTRO CURSO DE UÑAS</h1>
      <FaBook className="DashboardIcon"/>
      </div>
  </div>
  );
}
export default EnrollSchool;
