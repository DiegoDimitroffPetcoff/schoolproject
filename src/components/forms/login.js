import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";

import "../../styles/form/formContainer.css";

import Buttom1 from "../pure/Buttom2";
import AuthContext from "../../contexts/authContext";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);

  const navigate = useNavigate();

  const { logged, setLogged } = useContext(AuthContext);

  const formData = { nickname: name, password: password };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:8080/login/", formData)
      .then(function (response) {
        console.log("Respuesta del servidor:", response.data);
        Cookies.set(response.data);
        setLogged(!logged);
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log("Error al realizar la solicitud POST:", error);
        setWrongPassword(!wrongPassword);
      });
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

        <Buttom1 variant="primary" string="ENVIAR" type="submit" />
      </Form>
      {!wrongPassword ? null : <h1 className="title">Usuario o Constraseña</h1>}
    </>
  );
}

export default LoginForm;
