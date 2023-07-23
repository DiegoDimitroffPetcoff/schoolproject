import { useState, useContext } from "react";

import Logo from "../components/pure/Logo";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Navbar from "../components/pure/Navbar";
import GetInSchool from "../containers/school/getInSchool";

import AuthContext from "../contexts/authContext";
import Login from "./login";
import Avatar from "../components/pure/Avatar";
import EnrollSchool from "../containers/school/enrollSchool";

function Dashboard(params) {
  const {adm, setAdm, logged, setLogged} = useContext(AuthContext)
  const [schoolEnrolled, setSchoolEnrolled] = useState(true);

console.log(logged);

  return (
    <>
    {logged ?
(     <> 
<header className="head">
        <Logo/>
        <NavbarBurguer/>
        <Navbar/>
        <Avatar/>
      </header>
      <main>
      <h1 className="title">DASHBOARD</h1>
        <section>{schoolEnrolled ? <GetInSchool/> : <EnrollSchool/>}</section>
        <section>TUS TURNOS</section>
        <section>DEJANOS UN MENSAJE</section>
      
  

      </main></>) : <Login/>
      }</> 
   
  );
}
export default Dashboard;
