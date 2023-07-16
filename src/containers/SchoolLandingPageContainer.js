import Buttom1 from "../components/pure/Buttom"
import "../styles/sectionTwo.css"
function SchoolLandingPage() {
    
    return(
        <div className="SectionContainer">
        <div className="BorderContainer">
            <h1 className="titleTwo">TALLERES PEDICURA Y MANICURA</h1>
            <p className="subTitleTwo">Nuestro trabajo es el de hacer y enseñar.. aprender y compartir</p>
           <p className="textTwo"> Sumate a aprender algo nuevo, divertido y rentable! </p>
                      </div>
                      <p className="textTwo"><Buttom1 string="INSCRIBIRME!"></Buttom1></p>
        </div>
    )
}
export default SchoolLandingPage