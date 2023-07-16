import Logo from "../components/pure/Logo";
import Navbar from "../components/pure/Navbar";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Carrousel from "../components/pure/Carrousel";
import "../styles/homePageStyles.css";
import WhoWeAre from "./whoWeAreContainer";
import SchoolLandingPage from "./SchoolLandingPageContainer";
import NewsLetter from "./NewsLetterContainer";
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

      <section className="body">
        <Carrousel className="body" imagen={mockImagenes}></Carrousel>
        </section>
        <section className="sectionOne">
        <WhoWeAre/>
        </section>
        <section className="sectionOne">
        <SchoolLandingPage/>
        </section>
        <section className="sectionOne">
        <NewsLetter/>
        </section>

      <div className="footer">footer</div>
      <div className="body">footer12</div>
    </div>
  );
}
export default HomePage;
