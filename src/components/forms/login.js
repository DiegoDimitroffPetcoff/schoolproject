import Form from "react-bootstrap/Form";
import { useState } from "react";

import "../../styles/form/formContainer.css";

import Buttom1 from "../pure/Buttom2";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nombre:", name);

    console.log("Contraseña:", password);
  };

  return (

      <Form className="formContainer" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="password"
            placeholder="Constraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

   
          <Buttom1 variant="primary" string="ENVIAR" type="submit">
            ENVIAR
          </Buttom1>
       
      </Form>

  );
}

export default LoginForm;
