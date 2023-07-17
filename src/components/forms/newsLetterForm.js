import Buttom1 from "../Buttom2";
import Form from "react-bootstrap/Form";
import "../../../styles/form/formContainer.css"
import { useState } from "react";

function NewsLetterForm() {
    const [email, setEmail] = useState("")
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
        console.log(`Email: ${email}`);
      };



  return (
    <form  className="formContainer">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
        <Form.Text className="text-muted">
          No compartiremos tu email con nadie mas.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Quiero Recibir Novedades y Ofertas disponibles"
        />
      </Form.Group>
      <div className="FormButtom">
      <Buttom1 string="ENVIAR"  type="submit">ENVIAR</Buttom1>
      </div>
    </Form>
    </form>
  );
}

export default NewsLetterForm;
