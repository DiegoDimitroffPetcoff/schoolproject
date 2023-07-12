import Logo from "../components/pure/Logo";
import Navbar from "../components/pure/Navbar";
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
