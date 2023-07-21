import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";

import "../styles/sectionOne.css";
import "../styles/whoWeAre.css";

import Buttom2 from "../../components/pure/Buttom2";
import Buttom1 from "../../components/pure/Buttom";

import authContext from "../../contexts/authContext";


function EnrollSchool() {
  const [title, setTitle] = useState("Apasionados por tus uñas");
  const [subTitle, setSubTitle] = useState("Nuestro trabajo es el de hacer y enseñar.. aprender y compartir");
  const [text, setText] = useState("Mi nombre es Vanina Zucarelli, trabajando y dirigiendo este hermoso emprendimiento desde hace más de 10 años. Quiero darte la bienvenida,espero puedas encontrar este sitio interesante, donde podrás ver los trabajos realizados tanto por mí como por mis alumnos.");
  const [editeActive, setEditeActive] = useState(false);

  const {adm, setAdm, logged, setLogged} = useContext(authContext)

  const handleSubmit = (event) => {
    event.preventDefault();

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
        {adm && logged && !editeActive? (<Buttom1 string="EDITAR" action={() => { setEditeActive(!editeActive) }}/>) : ("") }
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
export default EnrollSchool;
