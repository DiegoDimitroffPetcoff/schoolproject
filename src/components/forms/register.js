import Form from "react-bootstrap/Form";
import { useState } from "react";

import "../../styles/form/formContainer.css";

import Buttom1 from "../pure/Buttom2";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [document, setDocument] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSecondNameChange = (event) => {
    setSecondName(event.target.value);
  };
  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handleNickNameChange = (event) => {
    setNickName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleDocumentChange = (event) => {
    setDocument(event.target.value);
  };
  const handleCellPhoneChange = (event) => {
    setCellPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);


  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    const formData = {
      name:{
        firstName: firstName,
        secondName: secondName,
        dateOfBirth: dateOfBirth,      
      },
  
      nickname: nickName,
      password: password,
      document: {
        number:document,
        typeOf: "DNI"      
      },
      contact:{
        cellPhone: cellPhone,
        email: email
      },
      avatar:"avatar"
    };

    // Convertir el objeto a una cadena JSON y mostrarlo en la consola
    const formDataJSON = JSON.stringify(formData);
    console.log(formDataJSON);
  };

  return (
 
      <Form className="formContainer" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={handleFirstNameChange}
            value={firstName}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="secondName">
          <Form.Control
            type="text"
            placeholder="Apellido"
            onChange={handleSecondNameChange}
            value={secondName}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dateOfBirth">
          <Form.Control
            type="date"
            placeholder="Fecha de Nacimiento"
            onChange={handleDateOfBirthChange}
            value={dateOfBirth}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="nickName">
          <Form.Control
            type="text"
            placeholder="Usuario"
            onChange={handleNickNameChange}
            value={nickName}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={handlePasswordChange}
            value={password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="document">
          <Form.Control
            type="number"
            placeholder="Documento"
            onChange={handleDocumentChange}
            value={document}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cellPhone">
          <Form.Control
            type="phonenumber"
            placeholder="Telefono"
            onChange={handleCellPhoneChange}
            value={cellPhone}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
            required
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

  );
}

export default RegisterForm;
