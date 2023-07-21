import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";

import "../../styles/sectionOne.css";
import "../../styles/whoWeAre.css";

import authContext from "../../contexts/authContext";


function GetInSchool() {


  const {adm, setAdm, logged, setLogged} = useContext(authContext)

  return (
    <>
<h1>ENTRAR A TU TALLER</h1>
   
 

  </>
  );
}
export default GetInSchool;
