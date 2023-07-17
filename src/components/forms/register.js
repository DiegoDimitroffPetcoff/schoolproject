import Form from "react-bootstrap/Form";
import { useState } from "react";

import "../../styles/form/formContainer.css";

import Buttom1 from "../pure/Buttom2";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    console.log(`Email: ${email}`);
  };

  return (
    <form className="formContainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Nombre Completo"
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Apellido"
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Quiero Recibir Novedades y Ofertas disponibles"
          />
        </Form.Group>
        <div className="FormButtom">
          <Buttom1 string="ENVIAR" type="submit">
            ENVIAR
          </Buttom1>
        </div>
      </Form>
    </form>
  );
}

export default RegisterForm;
