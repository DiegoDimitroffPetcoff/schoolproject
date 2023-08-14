import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";

import "../styles/sectionOne.css";
import "../styles/whoWeAre.css";

import Buttom2 from "../components/pure/Buttom2";
import Buttom1 from "../components/pure/Buttom";

import authContext from "../contexts/authContext";

import Cookies from "js-cookie";
import axios from "axios";



function WhoWeAre() {

  const [title, setTitle] = useState("Cargando...");
  const [subTitle, setSubTitle] = useState("Cargando...");
  const [text, setText] = useState("Cargando...");
  const [editeActive, setEditeActive] = useState(false);


  const {adm, setAdm, logged, setLogged} = useContext(authContext)

  let cookieData = null;
  let role = "alumn"

  if (logged) {
    cookieData = JSON.parse(Cookies.get("userData"));
    if (cookieData.user.role === "admin") {
      role = "admin"
    }  
  }

  axios.get('https://zucarellitanailsbackend.vercel.app/whoweare/')
  .then(function (response) {
    setTitle(response.data[0].title)
    setSubTitle(response.data[0].subTitle)
    setText(response.data[0].text)
  })
  .catch(function (error) {

    console.log(error);
  })



  const handleSubmit = (event) => {
    event.preventDefault();

  // Obtén los valores de los campos de texto del formulario
  const newTitle = event.target.elements.title.value;
  const newSubTitle = event.target.elements.subTitle.value;
  const newText = event.target.elements.text.value;

  // Actualiza los estados con los nuevos valores
  setTitle(newTitle);
  setSubTitle(newSubTitle);
  setText(newText);




  };



  return (
    <>
    {!editeActive ? (
      <div className="SectionContainerOne">
        <h1 className="title">{title}</h1>
        <p className="subTitle">
          {subTitle}
        </p>
        <p className="text">
     {text}
        </p>
        {adm && logged && role == "admin" && !editeActive? (<Buttom1 string="EDITAR" action={() => { setEditeActive(!editeActive)}}/>) : ("") }
        <p className="text">¡Anímate a formar parte de este grupo!</p>
        <p className="text">
          <Buttom2 string="UNETE A NUESTROS TALLERES!" />
        </p>
        <img className="whoWeArePicture" alt="imagen de vanina zucarelli" src="/vaninazucarelli.png" />
      </div>
     
    ) : 
    
    
    
    
    
    
    
    
    (
      <Form className="formEditable" onSubmit={handleSubmit}>
        <Form.Group className="titleEditable" controlId="formBasicName">      
          <textarea
          className="titleEditable"
            type="text"
            placeholder={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>  
        <Form.Group className="subTitleEditable" controlId="formBasicEmail">        
          <textarea
          className="subTitleEditable"
            type="text"
            placeholder={subTitle}
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </Form.Group>  
        <Form.Group  className="textEditable" controlId="formBasicPassword">
          <textarea
          className="textEditable"
            type="text"
            placeholder={text}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>  
        <Buttom1 string="ACEPTAR" variant="success" action={() => { setEditeActive(!editeActive) }} type="submit"/>


        
        
        
        
        
        <p className="text">¡Anímate a formar parte de este grupo!</p>         
        <p className="text">
          <Buttom1 string="UNETE A NUESTROS TALLERES!"  />
        </p>
        <img className="whoWeArePicture" alt="imagen de vanina zucarelli" src="/vaninazucarelli.png" />
      </Form>
   
    )}

  </>
  );
}
export default WhoWeAre;
