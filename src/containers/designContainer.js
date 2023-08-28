import { Form, Button } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/sectionOne.css";
import "../styles/whoWeAre.css";
import "../styles/design/designContainer.css"

import Buttom2 from "../components/pure/Buttom2";
import Buttom1 from "../components/pure/Buttom";

import authContext from "../contexts/authContext";

import Cookies from "js-cookie";
import axios from "axios";
import DesignBox from "../components/designBox";



function Design() {

  const [title, setTitle] = useState("Cargando...");
  const [subTitle, setSubTitle] = useState("Cargando...");
  const [text, setText] = useState("Cargando...");
  const [id, setId] = useState(null);
  const [editeActive, setEditeActive] = useState(false);

  const {adm, setAdm, logged, setLogged} = useContext(authContext)

  function callToApi() {
    axios.get('https://zucarellitanailsbackend.vercel.app/whoweare/')
    .then(function (response) {   
       setTitle(response.data[0].title)
      setSubTitle(response.data[0].subTitle)
      setText(response.data[0].text)
      setId(response.data[0]._id)

    }).catch(function (error) {  
      console.log(error);
    })
  }

  let cookieData = null;
  let role = "alumn"

  if (logged) {
    cookieData = JSON.parse(Cookies.get("userData"));
    if (cookieData.user.role === "admin") {
      role = "admin"
    }  
  }

  useEffect(()=>{
  callToApi()
  },[])



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const data = { title,
      subTitle,
      text
    };
    await axios.patch(`https://zucarellitanailsbackend.vercel.app/whoweare/${id}`, data)
    .then(function (response) {   
      console.log(response)
      setEditeActive(!editeActive)
    }).catch(function (error) {  
      console.log(error);
    })
  };



  return (
    <>
    {!editeActive ? (
      <div className="SectionContainerOne">
        <h1 className="title">TALLERES</h1>
        <p className="subTitle">
          Sumate a aprender con nosotros!
        </p>
        <div className="DesignContainer">
          <DesignBox/>
        </div>
        
        
        </div>     
    ) : 
    
    
    
    
    
    
    
    
    (
      <Form className="formEditable" onSubmit={handleSubmit}>
        <Form.Group className="titleEditable" controlId="formBasicName">      
          <textarea
          className="titleEditable"
            type="text"
            value={title}
            placeholder={title}          
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>  
        <Form.Group className="subTitleEditable" controlId="formBasicEmail">        
          <textarea
          className="subTitleEditable"
            type="text"
            value={subTitle}
            placeholder={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </Form.Group>  
        <Form.Group  className="textEditable" controlId="formBasicPassword">
          <textarea
          className="textEditable"
            type="text"
            value={text}
            placeholder={text}
         
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>  
        <Buttom1
          string="ACEPTAR"
          variant="success"
          onClick={() => {
          handleSubmit();
          setEditeActive(!editeActive);
          }}
          type="submit"
          />
        <p className="text">¡Anímate a formar parte de este grupo!</p>         
        <p className="text">
          <Buttom1 string="UNETE A NUESTROS TALLERES!"  />
        </p>
        <img className="whoWeArePicture" alt="imagen de vanina zucarelli" src="/vaninazucarelli.png" />
      </Form>   
    )}
    </>
  );
}
export default Design;
