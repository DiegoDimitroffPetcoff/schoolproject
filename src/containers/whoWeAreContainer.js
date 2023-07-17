import "../styles/sectionOne.css";

import Buttom2 from "../components/pure/Buttom2";

function WhoWeAre() {
  return (
    <div className="SectionContainerOne">
      <h1 className="title">Apasionados por tus uñas</h1>
      <p className="subTitle">
        Nuestro trabajo es el de hacer y enseñar.. aprender y compartir
      </p>
      <p className="text">
        Mi nombre es Vanina Zucarelli, trabajando y dirigiendo es hermoso
        emprendimiento desde hace mas de 10 años, quiero darte la bienvenida,
        espero puedas encontrar este sitio interesante, en donde podras ver los
        trabajos realizados tanto por mi como por mis alumnos
      </p>
      <p className="text">Animate a formar parte de este grupo! </p>
      <p className="text">
        <Buttom2 string="UNETE A NUESTROS TALLERES!"></Buttom2>
      </p>
    </div>
  );
}
export default WhoWeAre;
