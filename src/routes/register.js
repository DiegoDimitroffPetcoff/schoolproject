import RegisterForm from "../components/forms/register";
import Logo from "../components/pure/Logo";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Navbar from "../components/pure/Navbar";

function Register(params) {
  return (
    <div>
      <header className="head">
        <Logo></Logo>
        <NavbarBurguer></NavbarBurguer>
        <Navbar></Navbar>
      </header>
      <h1 className="title">REGISTRARSE</h1>
      <RegisterForm></RegisterForm>
    </div>
  );
}
export default Register;
