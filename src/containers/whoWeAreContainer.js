import { Form, Button } from "react-bootstrap";

import "../styles/sectionOne.css";
import "../styles/whoWeAre.css";

import Buttom2 from "../components/pure/Buttom2";
import { useState } from "react";

function WhoWeAre() {
  const  [logged, setLogged] = useState(true)
  const  [adm, setAdm] = useState(true)
  const [title, setTitle] = useState("Apasionados por tus uñas");
  const [subTitle, setSubTitle] = useState("Nuestro trabajo es el de hacer y enseñar.. aprender y compartir");
  const [text, setText] = useState("Mi nombre es Vanina Zucarelli, trabajando y dirigiendo este hermoso emprendimiento desde hace más de 10 años. Quiero darte la bienvenida,espero puedas encontrar este sitio interesante, donde podrás ver los trabajos realizados tanto por mí como por mis alumnos.");

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="SectionContainerOne">
    {logged ? (
      <>
        <h1 className="title">{title}</h1>
        <p className="subTitle">
          {subTitle}
        </p>
        <p className="text">
     {text}
        </p>
        <p className="text">¡Anímate a formar parte de este grupo!</p>
        <p className="text">
          <Buttom2 string="UNETE A NUESTROS TALLERES!" />
        </p>
        <img className="whoWeArePicture" alt="imagen de vanina zucarelli" src="/vaninazucarelli.png" />
      </>
     
    ) : 
    
    
    
    
    
    
    
    
    (<div className="SectionContainerOne">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Subtitle</Form.Label>
          <Form.Control
            type="text"
            placeholder={subTitle}
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="text"
            placeholder={text}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
  
        <Button variant="success" type="submit">
          Aceptar
        </Button>
      </Form>
      </div>
    )}
     {adm ? (<Buttom2 string="editar" action={() => { setLogged(!logged) }}/>) : ("") }
  </div>
  );
}
export default WhoWeAre;
