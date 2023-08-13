import { useContext } from "react";

import WhoWeAre from "../containers/whoWeAreContainer";
import Logo from "../components/pure/Logo";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Navbar from "../components/pure/Navbar";
import Avatar from "../components/pure/Avatar";
import AuthContext from "../contexts/authContext";


function WhoWeAreRoute(params) {
 const {logged} = useContext(AuthContext)

  return (
    <div>
      <header className="head">
        <Logo/>
        <NavbarBurguer/>
        <Navbar/>
        {logged ? <Avatar/> : null}
        {logged ?<h1 className="title">QUIENES SOMOS</h1>: null}
      </header>
      
      <WhoWeAre/>
    </div>
  );
}
export default WhoWeAreRoute;
