import Logo from "../components/pure/Logo";
import Navbar from "../components/pure/Navbar";
import Bottom from "../components/pure/Buttom";
import Alert from "../utils/alertTest";
import Carrousel from "../components/pure/Carrousel";
import "../styles/homePageStyles.css";
function HomePage() {
  const mockImagenes = [
		'https://picsum.photos/id/1020/900',
		'https://picsum.photos/id/1025/900',
		'https://picsum.photos/id/1010/900',
	];
  return (
    <div className="homePageContainer">
      <div className="head">
      <Logo></Logo> 
      <div className="bottomContainer"><Bottom string="Registrarse" action={Alert}></Bottom></div>
      <Navbar></Navbar>
      </div>

      <div className="body">
        <Carrousel className="body" imagen={mockImagenes}></Carrousel>
        </div>

      <div className="footer">footer</div>
      <div className="body">footer12</div>
    </div>
  );
}
export default HomePage;
