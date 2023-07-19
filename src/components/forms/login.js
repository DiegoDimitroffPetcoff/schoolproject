import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";

import "../../styles/form/formContainer.css";

import Buttom1 from "../pure/Buttom2";
import AuthContext from "../../contexts/authContext";


import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);

  const navigate = useNavigate(); 



const {logged,setLogged} = useContext(AuthContext)
  const mockLogin =     {name: "Adm",
  password:"Adm"}    ;

  const handleSubmit = (event) => {
    event.preventDefault();
setLogged(!logged)

if (name === mockLogin.name && password === mockLogin.password) {
  console.log("Logged Successful");
  navigate("/");

} else {
setWrongPassword(!wrongPassword)

}




  };

  return (
<>
      <Form className="formContainer" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="password"
            placeholder="Constraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </Form.Group>


   
          <Buttom1 variant="primary" string="ENVIAR" type="submit"/>
       
      </Form>
      {!wrongPassword ? null :(<h1 className="title">Usuario o Constraseña</h1>)}
</>
  );
}

export default LoginForm;
