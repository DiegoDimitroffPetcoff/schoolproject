import Logo from "../components/pure/Logo";
import Navbar from "../components/pure/Navbar";
import NavbarBurguer from "../components/pure/NavbarBurguer";
import Carrousel from "../components/pure/Carrousel";
import WhoWeAre from "./whoWeAreContainer";
import SchoolLandingPage from "./SchoolLandingPageContainer";
import NewsLetter from "./NewsLetterContainer";
import Footer from "./footerContainer";

import "../styles/homePageStyles.css";

function HomePage() {
  const mockImagenes = [
    "https://picsum.photos/id/31/2000/450",
    "https://picsum.photos/id/365/2000/450",
    "https://picsum.photos/id/373/2000/450",
    "https://picsum.photos/id/341/2000/450",
  ];
  return (
    <div className="homePageContainer">
      
      <header className="head">
        <Logo></Logo>
        <NavbarBurguer></NavbarBurguer>
        <Navbar></Navbar>
      </header>

      <section className="body">
        <Carrousel className="body" imagen={mockImagenes}></Carrousel>
      </section>
      <section className="sectionOne">
        <WhoWeAre />
      </section>
      <section className="sectionOne">
        <SchoolLandingPage />
      </section>
      <section className="sectionOne">
        <NewsLetter />
      </section>

      <footer className="sectionOne">
        <Footer />
      </footer>
    </div>
  );
}
export default HomePage;
