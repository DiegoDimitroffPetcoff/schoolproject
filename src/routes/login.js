import LoginForm from "../components/forms/login";
import Logo from "../components/pure/Logo";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Navbar from "../components/pure/Navbar";
import Avatar from "../components/pure/Avatar";
import { useContext } from "react";



function Login(params) {

  return (
    <div>
        
      <header className="head">
        <Logo></Logo>
        <NavbarBurguer></NavbarBurguer>
        <Navbar></Navbar>

      </header>
      <h1 className="title">INGRESAR</h1>
      <LoginForm></LoginForm>
     
    </div>
  );
}
export default Login;
