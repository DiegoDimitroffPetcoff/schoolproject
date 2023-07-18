import Form from "react-bootstrap/Form";
import { useState } from "react";

import "../../styles/form/formContainer.css";

import Buttom1 from "../pure/Buttom2";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const mockLogin =     {name: "Diego",
  password:"123"}    ;


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name:", name);
    console.log("password:", password);

if (name == mockLogin.name && password === mockLogin.password) {
  console.log("Logged Successful");

} else {
  console.log("Password or User incorrect");

}




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

   
          <Buttom1 variant="primary" string="ENVIAR" type="submit"/>
       
      </Form>

  );
}

export default LoginForm;
