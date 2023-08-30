import { useContext } from "react";


import Logo from "../components/pure/Logo";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Navbar from "../components/pure/Navbar";
import Avatar from "../components/pure/Avatar";
import AuthContext from "../contexts/authContext";
import Course from "../containers/courseContainer";


function CourseRoute(params) {
 const {logged} = useContext(AuthContext)

  return (
    <div>
      <header className="head">
        <Logo/>
        <NavbarBurguer/>
        <Navbar/>
        {logged ? <Avatar/> : null}
        {logged ?<h1 className="title">TALLERES</h1>: null}
      </header>
      
      <Course/>
    </div>
  );
}
export default CourseRoute;
