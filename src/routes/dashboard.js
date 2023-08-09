import { useState, useContext } from "react";

import Logo from "../components/pure/Logo";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Navbar from "../components/pure/Navbar";
import GetInSchool from "../containers/school/getInSchool";

import AuthContext from "../contexts/authContext";
import Login from "./login";
import Avatar from "../components/pure/Avatar";
import EnrollSchool from "../containers/school/enrollSchool";
import Appointment from "../containers/appointment/appointment";

import Cookies from "js-cookie"

function Dashboard(params) {
const {adm, setAdm, logged, setLogged} = useContext(AuthContext)
const [schoolEnrolled, setSchoolEnrolled] = useState(true);
const user = JSON.parse(Cookies.get("userData"))
console.log(user);

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
        <h1 className="title">Hey {user.name.firstName} {user.name.secondName}!</h1>
        
      </header>
      <main>

        <section>{schoolEnrolled ? <GetInSchool/> : <EnrollSchool/>}</section>
        <section><Appointment/></section>

      </main></>) : <Login/>
      }</> 
   
  );
}
export default Dashboard;
