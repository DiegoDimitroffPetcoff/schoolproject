import WhoWeAre from "../containers/whoWeAreContainer";
import Logo from "../components/pure/Logo";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Navbar from "../components/pure/Navbar";

function whoWeAre(params) {
  return (
    <div>
      <header className="head">
        <Logo/>
        <NavbarBurguer/>
        <Navbar/>
      </header>
      <h1 className="title">REGISTRARSE</h1>
      <WhoWeAre/>
    </div>
  );
}
export default whoWeAre;
