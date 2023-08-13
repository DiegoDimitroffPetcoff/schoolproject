import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";

import "../../styles/form/formContainer.css";

import Buttom1 from "../pure/Buttom2";
import AuthContext from "../../contexts/authContext";
import Dashboard from "../../routes/dashboard";

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



  axios.get('https://zucarellitanailsbackend.vercel.app/user')
  .then(function (response) {
    console.log(response.data);
          })
  .catch(function (error) {
    console.log(error);
  })    




    await axios
      .post("https://zucarellitanailsbackend.vercel.app/login/", formData)
      .then(function (response) {
        //if the user is correct the Back reply with the user information and session token
        console.log("Respuesta del servidor:", response.data);
        setLogged(!logged);
        Cookies.set("userData", JSON.stringify(response.data));
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log("Error al realizar la solicitud POST:", error);
        setWrongPassword(!wrongPassword);
      });

  };

  return (
    <>
      {!logged ? (
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
          {!wrongPassword ? null : (
            <h1 className="title">Usuario o Constraseña</h1>
          )}
        </>
      ) : (
        <Dashboard/>
      )}
    </>
  );
}

export default LoginForm;
