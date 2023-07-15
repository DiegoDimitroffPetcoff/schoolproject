import Logo from "../components/pure/Logo";
import Navbar from "../components/pure/Navbar";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Carrousel from "../components/pure/Carrousel";
import "../styles/homePageStyles.css";
import WhoWeAre from "./whoWeAreContainer";
function HomePage() {
  const mockImagenes = [
    "https://picsum.photos/id/31/2000/450",
    "https://picsum.photos/id/365/2000/450",
    "https://picsum.photos/id/373/2000/450",
    "https://picsum.photos/id/341/2000/450",

	];
  return (
    <div className="homePageContainer">
      <div className="head">

        
      <Logo></Logo> 
      <NavbarBurguer></NavbarBurguer>
      <Navbar></Navbar>
      </div>

      <div className="body">
        <Carrousel className="body" imagen={mockImagenes}></Carrousel>
        </div>
        <div className="sectionOne">
        <WhoWeAre/>
        </div>

      <div className="footer">footer</div>
      <div className="body">footer12</div>
    </div>
  );
}
export default HomePage;
