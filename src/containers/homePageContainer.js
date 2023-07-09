import Logo from "../components/pure/Logo";
import Navbar from "../components/pure/Navbar";
import Bottom from "../components/pure/Buttom";
import Alert from "../utils/alertTest";
import "../styles/homePageStyles.css";
function HomePage() {
  return (
    <div className="homePageContainer">
      <div className="head">
      <Logo></Logo> 
      <div className="bottomContainer"><Bottom string="Registrarse" action={Alert}></Bottom></div>
      <Navbar></Navbar>
      </div>
      <div className="body">body</div>
      <div className="footer">footer</div>
      <div className="body">footer12</div>
    </div>
  );
}
export default HomePage;
