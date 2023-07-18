import { useState } from "react";
import Form from "react-bootstrap/Form";

import Buttom1 from "../pure/Buttom2";

import "../../styles/form/formContainer.css"


function NewsLetterForm() {
  const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [checked,setChecked] = useState(false)
 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Checked: ${checked}`);
      };



  return (

    <Form className="formContainer" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">

      <Form.Label>Nombre Completo</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Nombre completo" 
        value={name}
        onChange={(e)=>setName(e.target.value)} 
        />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)} 
        />
        <Form.Text className="text-muted">
          No compartiremos tu email con nadie mas.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Quiero Recibir Novedades y Ofertas disponibles"
          value={checked}
          onChange={()=>{setChecked(!checked)}}
        />
      </Form.Group>

     
      <Buttom1 className="FormButtom" string="ENVIAR"  type="submit"/>
      
    </Form>

  );
}

export default NewsLetterForm;
